import React from 'react'
import { parseAsString,createLoader, parseAsArrayOf, parseAsStringLiteral } from 'nuqs/server'
export const sortValues = ["Newest", "Oldest", "Default"] as const;
export const params = {
    sort: parseAsStringLiteral(sortValues).withDefault("Default"),
    minPrice: parseAsString
        .withOptions({
            clearOnDefault: true,
        })
        .withDefault(""),
        maxPrice: parseAsString
        .withOptions({
            clearOnDefault: true,
        })
        .withDefault(""),
        tags: parseAsArrayOf(parseAsString)
        .withOptions({
            clearOnDefault: true,
        })
        .withDefault([]),
}

export const LoadProductFilters = createLoader(params);
