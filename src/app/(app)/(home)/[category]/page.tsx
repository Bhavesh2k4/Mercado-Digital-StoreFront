
import { trpc , getQueryClient } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import type { SearchParams } from 'nuqs/server';
import { LoadProductFilters } from '@/modules/products/search-params';
import ProductListView from '@/modules/products/ui/views/product-list-view';
import { DEFAULT_LIMIT } from '@/constants';
interface props{
    params: Promise<{
        category: string;
    }>,
    searchParams:Promise<SearchParams>
}
const CategoryPage  = async ({params,searchParams}:props) => {
    const { category } = await params;
    const filters = await LoadProductFilters(searchParams);
    const queryClient=getQueryClient();
    void queryClient.prefetchInfiniteQuery(trpc.products.getMany.infiniteQueryOptions({
        ...filters,
        category,
        limit: DEFAULT_LIMIT,
    }));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductListView category={category} />
    </HydrationBoundary>

  )
}

export default CategoryPage