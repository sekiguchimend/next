import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
});
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
