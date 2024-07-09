import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { createClient } from "microcms-js-sdk";

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("Supabase URL or ANON KEY is not defined");
}

export const client = createClient({
  serviceDomain: "blog-next-myapp",
  apiKey: process.env.API_KEY as string,
});
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
