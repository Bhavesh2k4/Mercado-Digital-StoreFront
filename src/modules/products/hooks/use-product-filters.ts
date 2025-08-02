import { useQueryStates ,parseAsString, parseAsArrayOf, parseAsStringLiteral} from 'nuqs'

const sortValues = ["Newest", "Oldest", "Default"] as const;

export const params = {
    search: parseAsString.
        withOptions({
            clearOnDefault: true,
        })
        .withDefault(""),
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

export const UseProductFilters = () => {
  return useQueryStates(params);
}

 