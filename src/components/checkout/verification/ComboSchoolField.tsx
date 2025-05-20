
import * as React from "react";
import { Check, ChevronsUpDown, ArrowDown } from "lucide-react"; // ChevronsUpDown might not be allowed, will use ArrowDown
import { Link, useNavigate } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { School } from "@/hooks/useSchoolsList"; // Ensure School type is imported

interface ComboSchoolFieldProps {
  identifier: string; // OPEID or manually typed school name
  isManual: boolean;
  onIdentifierChange: (id: string) => void;
  onIsManualChange: (isManual: boolean) => void;
  schools: School[];
  isLoadingSchools: boolean;
  schoolsError: string | null;
  placeholder?: string;
  disabled?: boolean;
}

export function ComboSchoolField({
  identifier,
  isManual,
  onIdentifierChange,
  onIsManualChange,
  schools,
  isLoadingSchools,
  schoolsError,
  placeholder = "Select or type your school...",
  disabled = false,
}: ComboSchoolFieldProps) {
  const [open, setOpen] = React.useState(false);
  const [displayValue, setDisplayValue] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoadingSchools || schoolsError) {
      setDisplayValue(""); // Clear display value if loading or error
      return;
    }
    if (!isManual && identifier) {
      const school = schools.find((s) => s.value === identifier);
      setDisplayValue(school ? school.label : identifier); // Fallback to identifier if not found (e.g. stale data)
    } else {
      setDisplayValue(identifier); // For manual entries or empty identifier
    }
  }, [identifier, isManual, schools, isLoadingSchools, schoolsError]);

  const handleInputChange = (searchValue: string) => {
    setDisplayValue(searchValue);
    onIdentifierChange(searchValue);
    onIsManualChange(true); // Any typing makes it manual until a list item is selected
  };

  const handleSelectSchool = (school: School) => {
    onIdentifierChange(school.value);
    onIsManualChange(false);
    setDisplayValue(school.label);
    setOpen(false);
  };

  const triggerLabel = () => {
    if (isLoadingSchools) return "Loading schools...";
    if (schoolsError) return "Error loading schools";
    return displayValue || placeholder;
  };

  return (
    <div className="space-y-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between text-muted-foreground hover:text-muted-foreground"
            disabled={disabled || isLoadingSchools || !!schoolsError}
          >
            <span className="truncate">{triggerLabel()}</span>
            <ArrowDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[--radix-popover-trigger-width] p-0 max-h-[--radix-popover-content-available-height]">
          <Command shouldFilter={!isManual}> {/* Disable cmdk filtering if user is typing manually and we want to show "no results" based on exact match instead of fuzzy */}
            <CommandInput
              placeholder="Search for your school..."
              value={displayValue}
              onValueChange={handleInputChange}
              disabled={disabled || isLoadingSchools || !!schoolsError}
            />
            <CommandList>
              {isLoadingSchools && (
                <CommandItem disabled className="text-center justify-center">Loading...</CommandItem>
              )}
              {schoolsError && !isLoadingSchools && (
                 <CommandItem disabled className="text-center justify-center text-red-500">Error: {schoolsError}</CommandItem>
              )}
              {!isLoadingSchools && !schoolsError && schools.length === 0 && (
                <CommandEmpty>No school found.</CommandEmpty>
              )}
              {!isLoadingSchools && !schoolsError && schools.length > 0 && (
                 <CommandEmpty>No school found. <span className="text-xs block">You can proceed with the name you typed.</span></CommandEmpty>
              )}
              <CommandGroup>
                {!isLoadingSchools && !schoolsError && schools.map((school) => (
                  <CommandItem
                    key={school.value}
                    value={school.label} // cmdk uses this for filtering against CommandInput's value
                    onSelect={() => {
                      handleSelectSchool(school);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        identifier === school.value && !isManual
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {school.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <p className="text-xs text-gray-600 text-center">
        Can't find your school on the list?{" "}
        <Link
          to="/checkout/upload-docs"
          className="text-sunny-orange hover:text-sunny-orange-dark underline"
        >
          Click here to upload documents.
        </Link>
      </p>
    </div>
  );
}

