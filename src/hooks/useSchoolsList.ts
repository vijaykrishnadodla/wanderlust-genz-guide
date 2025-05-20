
import { useState, useEffect } from 'react';

interface ApiSchool {
  "FICE": string;
  "OPE ID": string;
  "Institution Name": string;
  "Street": string;
  "City": string;
  "State": string;
  "Zip": string;
  "Zip4": string | null;
  "Main": string;
  "Branch": string | null;
  "CIP": string;
}

export interface School {
  value: string;
  label: string;
}

export const useSchoolsList = () => {
  const [schoolsList, setSchoolsList] = useState<School[]>([]);
  const [isLoadingSchools, setIsLoadingSchools] = useState<boolean>(true);
  const [schoolsError, setSchoolsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchools = async () => {
      setIsLoadingSchools(true);
      setSchoolsError(null);
      try {
        const response = await fetch('https://docs.studentclearinghouse.org/vs/insights-json/participating-schools');
        if (!response.ok) {
          throw new Error(`Failed to fetch schools: ${response.statusText}`);
        }
        const data: ApiSchool[] = await response.json();
        const formattedSchools: School[] = data
          .filter(school => school["Institution Name"] && school["OPE ID"])
          .map(school => ({
            value: school["OPE ID"],
            label: school["Institution Name"],
          }))
          .sort((a, b) => a.label.localeCompare(b.label));
        
        setSchoolsList(formattedSchools);
      } catch (error) {
        console.error("Error fetching schools:", error);
        setSchoolsError("Could not load the list of schools. Please try again later or contact support.");
      } finally {
        setIsLoadingSchools(false);
      }
    };

    fetchSchools();
  }, []);

  return { schoolsList, isLoadingSchools, schoolsError };
};
