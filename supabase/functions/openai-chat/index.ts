import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { corsHeaders } from '../_shared/cors.ts';

interface ChatGptPromptData {
  name: string;
  city: string;
  country: string;
  holidayType: string;
  userDescription?: string;
}

// Simple in-memory rate limiting by IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 10; // max requests per window per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) {
    return true;
  }
  return false;
}

function validateInput(data: any): { valid: boolean; error?: string } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Invalid request body.' };
  }

  const { name, city, country, holidayType, userDescription } = data;

  if (!name || typeof name !== 'string' || name.length > 100) {
    return { valid: false, error: 'Invalid or missing name (max 100 chars).' };
  }
  if (!city || typeof city !== 'string' || city.length > 100) {
    return { valid: false, error: 'Invalid or missing city (max 100 chars).' };
  }
  if (!country || typeof country !== 'string' || country.length > 100) {
    return { valid: false, error: 'Invalid or missing country (max 100 chars).' };
  }
  if (!holidayType || typeof holidayType !== 'string' || holidayType.length > 100) {
    return { valid: false, error: 'Invalid or missing holidayType (max 100 chars).' };
  }
  if (userDescription !== undefined && userDescription !== null) {
    if (typeof userDescription !== 'string' || userDescription.length > 500) {
      return { valid: false, error: 'userDescription must be a string (max 500 chars).' };
    }
  }

  return { valid: true };
}

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Rate limiting
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(clientIp)) {
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 429 }
      );
    }

    // Parse and validate input
    let body: any;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON body.' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    const validation = validateInput(body);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    const { name, city, country, holidayType, userDescription }: ChatGptPromptData = body;
    const openAiApiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openAiApiKey) {
      console.error('OPENAI_API_KEY is not set in Supabase secrets.');
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured on the server.' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    let prompt = `You are a friendly and enthusiastic travel assistant for students. 
Generate a short, engaging, and personalized travel vibe description (2-3 sentences) for a student named ${name}.
They are interested in a ${holidayType} style trip to ${city}, ${country}.`;

    if (userDescription && userDescription.trim() !== "") {
      prompt += ` They also mentioned this about their ideal trip: "${userDescription}". Incorporate this specific interest naturally into the vibe description if possible.`;
    } else {
      prompt += ` Focus on what makes ${city} special for a ${holidayType} trip for a student.`;
    }
    
    prompt += ` Make it sound exciting and tailored to a student's perspective, highlighting unique experiences. Do not include greetings like "Hello ${name}" or any introductory phrases. Just provide the vibe description.`;

    const messages = [
      { role: 'system', content: 'You are a helpful travel assistant specializing in student travel.' },
      { role: 'user', content: prompt },
    ];

    const requestBody = JSON.stringify({
      model: 'gpt-4o-mini',
      messages: messages,
      temperature: 0.7,
      max_tokens: 150,
    });

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      throw new Error(errorData.error?.message || `OpenAI API request failed with status ${response.status}`);
    }

    const resultJson = await response.json();
    const personalizedDescription = resultJson.choices?.[0]?.message?.content?.trim();

    if (!personalizedDescription) {
      console.error('No content in OpenAI response:', resultJson);
      throw new Error('Failed to get a valid description from OpenAI.');
    }
    
    return new Response(
      JSON.stringify({ personalizedDescription }), 
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    );

  } catch (error) {
    console.error('Error in Supabase function:', error);
    return new Response(
      JSON.stringify({ error: 'An internal server error occurred.' }), 
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
