import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "blog-next-myapp",
  apiKey: process.env.API_KEY,
});
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
