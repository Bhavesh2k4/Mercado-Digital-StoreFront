import { z } from 'zod';
export const registerSchema = z.object({
        email: z.string().email("Enter a valid email address"),
        password: z.string().min(6,"Password must be at least 6 characters long").max(100,"Password must be at most 100 characters long"),
        username: z.string().min(3,"Username must be at least 3 characters long").max(63,"Username must be at most 63 characters long").regex(/^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$/ , "Username must start and end with a letter or number and can only contain letters, numbers, and hyphens")
        .refine((val) => !val.includes("--"), "Username cannot contain consecutive hyphens")
        .transform((val) => val.toLowerCase())
})

export const loginSchema = z.object({
        email: z.string().email(),
        password: z.string(),
    });