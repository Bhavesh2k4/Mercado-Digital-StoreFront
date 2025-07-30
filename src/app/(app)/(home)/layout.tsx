import React, { Suspense } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import {SearchFilters} from './search-filters'
import { getQueryClient, trpc } from '@/trpc/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { SearchFiltersLoading } from './search-filters/index'

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.categories.getMany.queryOptions(),
  );

  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<SearchFiltersLoading />}>
             <SearchFilters />
          </Suspense>
        </HydrationBoundary>
        <div className='flex-1 bg-[#f4f4f0]'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout