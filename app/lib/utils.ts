import { clsx, type ClassValue } from "clsx"; // handles the conditional logic
import { twMerge } from "tailwind-merge"; // turns "py-2 px-2" into p-2

// classvalue is basically an array of strings or a key value object with the classnames
export function cn(...inputs: ClassValue[]): string {
  // this merges the classnames into one string
  return twMerge(clsx(inputs));
}
