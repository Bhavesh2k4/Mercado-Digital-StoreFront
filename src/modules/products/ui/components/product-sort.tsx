"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { UseProductFilters } from "../../hooks/use-product-filters"

export const ProductSort = () => {
  const [filters, setFilters] = UseProductFilters();

  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        className={cn(
          "rounded-full bg-white hover:bg-white",
          filters.sort !== "Default" &&
            "bg-transparent border-transparent hover:border-border hover:bg-transparent"
        )}
        variant="secondary"
        onClick={() => setFilters({ sort: "Default" })}
      >
        Name
      </Button>
      <Button
        size="sm"
        className={cn(
          "rounded-full bg-white hover:bg-white",
          filters.sort !== "Newest" &&
            "bg-transparent border-transparent hover:border-border hover:bg-transparent"
        )}
        variant="secondary"
        onClick={() => setFilters({ sort: "Newest" })}
      >
        Newest
      </Button>
      <Button
        size="sm"
        className={cn(
          "rounded-full bg-white hover:bg-white",
          filters.sort !== "Oldest" &&
            "bg-transparent border-transparent hover:border-border hover:bg-transparent"
        )}
        variant="secondary"
        onClick={() => setFilters({ sort: "Oldest" })}
      >
        Oldest
      </Button>
    </div>
  );
};