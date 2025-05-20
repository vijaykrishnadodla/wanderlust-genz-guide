import { useState, useEffect } from 'react';

interface ClearinghouseApiSchool {
  opeid: string;
  institutionName: string;
  active: boolean;
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
        const response = await fetch('https://verify.studentclearinghouse.org/api/vs/pse/schools?agreementType=Degree&accountId=ALL');
        if (!response.ok) {
          let errorData;
          try {
            errorData = await response.json();
          } catch (e) {
            // Ignore if response body is not JSON
          }
          const errorMessage = errorData?.message || response.statusText;
          throw new Error(`Failed to fetch schools: ${response.status} ${errorMessage}`);
        }
        const data: ClearinghouseApiSchool[] = await response.json();
        
        const formattedSchools: School[] = data
          .filter(school => school.institutionName && school.opeid && school.active === true)
          .map(school => ({
            value: school.opeid,
            label: school.institutionName,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));
        
        if (formattedSchools.length === 0) {
          setSchoolsError("No schools found matching the criteria or the list is currently unavailable. Please try again later.");
        }
        setSchoolsList(formattedSchools);
      } catch (error) {
        console.error("Error fetching schools:", error);
        if (error instanceof Error) {
          setSchoolsError(error.message);
        } else {
          setSchoolsError("Could not load the list of schools. Please try again later or contact support.");
        }
      } finally {
        setIsLoadingSchools(false);
      }
    };

    fetchSchools();
  }, []);

  return { schoolsList, isLoadingSchools, schoolsError };
};
