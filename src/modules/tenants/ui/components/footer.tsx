import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
});

export const Footer = () => {
  return (
    <footer className="border-t font-medium bg-white">
      <div className="max-w-(--breakpoint-xl) mx-auto flex items-center h-full gap-2 px-4 py-6 lg:px-12">
        <p>Powered by</p>
        <Link href={process.env.NEXT_PUBLIC_APP_URL!}>
          <span className={cn("text-2xl font-semibold", spaceGrotesk.className)}>
            Mercado
          </span>
        </Link>
      </div>
    </footer>
  );
};