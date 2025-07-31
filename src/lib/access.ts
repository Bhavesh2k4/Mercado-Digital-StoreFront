import { ClientUser } from "payload";
import type { User } from "@/payload-types";

export const isSuperAdmin = (user: User | ClientUser | null) => {
  return Boolean(user?.roles?.includes("super-admin"));
};

// Wrapper function for multi-tenant plugin contexts
// export const isSuperAdminMultiTenant = (user: any) => {
//   // Type guard to ensure user is from users collection
//   if (user?.collection === 'users') {
//     return isSuperAdmin(user as User);
//   }
//   return false;
// };