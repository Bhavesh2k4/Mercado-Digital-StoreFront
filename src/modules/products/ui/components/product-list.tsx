"use client";
import { useTRPC } from '@/trpc/client'
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react'
import {UseProductFilters} from '../../hooks/use-product-filters';

interface props{
    category?: string;
}
export const ProductList = ({category}:props) => {
  const [filters]=UseProductFilters();

    const trpc = useTRPC();
    const {data }=useSuspenseQuery(trpc.products.getMany.queryOptions({
        category,
        ...filters,
    }))
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {data?.docs.map((product) => (
        <div key={product.id} className="border bg-white rounded-md">
          <h2 className="text-lg font-medium">{product.name}</h2>
          <p className="">Rs{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export const ProductListSkeleton = () => {
  return (
    <div>Loading...</div>
  )
}


