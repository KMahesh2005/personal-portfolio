import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function getMatchBadgeVariant(percentage?: number): "default" | "secondary" | "destructive" | "outline" {
  if (!percentage) return "outline";
  if (percentage >= 90) return "default";
  if (percentage >= 85) return "secondary";
  return "outline";
}
