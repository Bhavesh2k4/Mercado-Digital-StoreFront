
import { trpc , getQueryClient } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import type { SearchParams } from 'nuqs/server';
import { LoadProductFilters } from '@/modules/products/search-params';
import ProductListView from '@/modules/products/ui/views/product-list-view';
import { DEFAULT_LIMIT } from '@/constants';
interface props{
    searchParams:Promise<SearchParams>
}
const CategoryPage  = async ({searchParams}:props) => {
    const filters = await LoadProductFilters(searchParams);
    const queryClient=getQueryClient();
    void queryClient.prefetchInfiniteQuery(trpc.products.getMany.infiniteQueryOptions({
        ...filters,
        limit: DEFAULT_LIMIT,
    }));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductListView />
    </HydrationBoundary>

  )
}

export default CategoryPage