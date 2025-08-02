"use client";
import React from 'react'
import SearchInput from './search-input';
import Categories from './categories';
import { useTRPC } from '@/trpc/client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { DEFAULT_BG_COLOR } from '@/modules/home/constants';
import BreadcrumbNavigation from './BreadcrumbNavigation';
import { UseProductFilters } from '@/modules/products/hooks/use-product-filters';

export const SearchFilters = () => {
  const trpc = useTRPC();
  const params=useParams();
  const categoryParam = params.category as string | undefined;
  const activeCategory = categoryParam || "all";
  const {data} = useSuspenseQuery(trpc.categories.getMany.queryOptions());
  const activeCategoryData = data.find(category => category.slug === activeCategory);
  const activeCategoryColor = activeCategoryData?.color || DEFAULT_BG_COLOR;
  const activeCategoryName = activeCategoryData?.name || null;
  const activeSubCategory = params.subcategory as string | undefined;
  const [filters ,setFilters] = UseProductFilters();
  const activeSubCategoryName = activeCategoryData?.subcategories?.find((sub) => sub.slug === activeSubCategory)?.name || null;
  return (
    <div className='px-4 lg:px-12 py-8 order-b flex flex-col gap-4 w-full' style={{backgroundColor:activeCategoryColor}}>
      <SearchInput defaultValue={filters.search} onChange={(value) => setFilters({ search: value })} />
      <div className='hidden lg:block'>
        <Categories data={data} />
      </div>
      <BreadcrumbNavigation 
        activeCategory={activeCategory}
        activeCategoryName={activeCategoryName} 
        activeSubCategoryName={activeSubCategoryName}
      />
    </div>
  )
}

export const SearchFiltersLoading = () => {
  return (
    <div className='px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full' style={{backgroundColor:DEFAULT_BG_COLOR}}>
        <SearchInput disabled={true}/>
      <div className='h-11'/>
    </div>
  )
}