import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function paginate(array: any[], page_size: number, page_number: number) {
  if(array )
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}
