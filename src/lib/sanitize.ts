/**
 * Sanitize user input to prevent XSS and other injection attacks
 */

/**
 * Remove potentially dangerous HTML/script content from strings
 * @param input - The string to sanitize
 * @returns Sanitized string
 */
export function sanitizeString(input: string): string {
  if (!input) return "";

  return input
    .replace(/[<>]/g, "") // Remove < and > characters
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, "") // Remove event handlers like onclick=
    .trim();
}

/**
 * Sanitize all string fields in an object
 * @param data - Object with string values to sanitize
 * @returns New object with sanitized values
 */
export function sanitizeFormData<T extends Record<string, unknown>>(data: T): T {
  const sanitized = { ...data };

  for (const key in sanitized) {
    if (typeof sanitized[key] === "string") {
      sanitized[key] = sanitizeString(sanitized[key] as string) as T[Extract<keyof T, string>];
    }
  }

  return sanitized;
}
