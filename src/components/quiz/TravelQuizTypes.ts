
export interface FormData {
  name: string;
  email: string;
  dest: string;
  vibe: string;
  style: string;
  cats: string[];
  group: string;
  idealTripDescription?: string;
}

export interface TravelQuizStepSharedProps {
  answers: FormData;
  update: (key: keyof FormData, val: string | string[]) => void;
}

export interface TravelQuizCalculatedResults {
  base: string;
  breakdown: { [key: string]: { spend: string; save: string } };
  saveTotal: string;
}

export interface TravelQuizResultsViewProps {
  answers: FormData;
  calculatedResults: TravelQuizCalculatedResults;
  heroImg: string;
  onSnagMembership: () => void;
}
