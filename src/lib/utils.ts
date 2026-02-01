import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

/**
 * Vérifie si une URL est externe (commence par http:// ou https://)
 * @param url - L'URL à vérifier
 * @returns true si l'URL est externe, false sinon
 */
export function isExternalLink(url: string): boolean {
  if (!url) return false;
  return /^https?:\/\//i.test(url);
}
