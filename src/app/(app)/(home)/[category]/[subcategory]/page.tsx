
import { trpc , getQueryClient } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import React, { Suspense } from 'react'
import type { SearchParams } from 'nuqs/server';
import { LoadProductFilters } from '@/modules/products/search-params';
import ProductListView from '@/modules/products/ui/views/product-list-view';
interface props{
    params: Promise<{
        subcategory: string;
    }>,
    searchParams:Promise<SearchParams>
}
const CategoryPage  = async ({params,searchParams}:props) => {
    const { subcategory } = await params;
    const filters = await LoadProductFilters(searchParams);
    console.log("filters", filters);
    const queryClient=getQueryClient();
    void queryClient.prefetchQuery(trpc.products.getMany.queryOptions({
        category:subcategory,
        ...filters,
    }));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductListView category={subcategory} />
    </HydrationBoundary>

  )
}

export default CategoryPage