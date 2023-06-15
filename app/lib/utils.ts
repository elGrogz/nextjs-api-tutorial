import { clsx, type ClassValue } from "clsx"; // handles the conditional logic
import { twMerge } from "tailwind-merge"; // turns "py-2 px-2" into p-2

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
