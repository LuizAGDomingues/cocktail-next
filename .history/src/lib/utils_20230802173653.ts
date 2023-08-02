import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function paginate(array: any[], page_size: number, page_number: number) {
  if(!array || array === undefined || array.length === 0) {return null}
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export function comparePasswords(password1: string, password2: string) {
  return password1 === password2;
}