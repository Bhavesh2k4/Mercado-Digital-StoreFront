import React from 'react'
import { parseAsString, useQueryStates } from 'nuqs'
import { min } from 'date-fns'

const UseProductFilters = () => {
  return useQueryStates(
    {
        minPrice: parseAsString
        .withOptions({
            clearOnDefault: true,
        }),
        maxPrice: parseAsString
        .withOptions({
            clearOnDefault: true,
        }),
    }
  )
}

export default UseProductFilters