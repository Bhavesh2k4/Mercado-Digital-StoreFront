"use client"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronDownIcon, ChevronRightIcon, Filter, FilterXIcon, Tags, Trash2Icon } from 'lucide-react'
import React from 'react'
import { PriceFilter } from './price-filter'
import {UseProductFilters} from '../../hooks/use-product-filters'
import { TagsFilter } from './tags-filter'

interface props{
  title:string,
  className?:string,
  children?: React.ReactNode
}

const ProductFilter= ({
  title,
  className,
  children
}:props) => {
  const [isOpen,setIsOpen] = React.useState(false);
  const Icon = isOpen ? ChevronDownIcon : ChevronRightIcon;

  return (
    <div className={cn("p-4 border-b flex flex-col gap-2", className)}>
      <div onClick={() => setIsOpen((current)=> !current)} className="flex items-center justify-between cursor-pointer">
        <p className='font-medium'>{title}</p>
        <Icon className="size-5" />
      </div>
      {isOpen && children}
    </div>
  )
}

const ProductFilters = () => {
  const [filters,setFilters]=UseProductFilters();
  const hasAnyFilters = Object.entries(filters).some(([key,value]) => {
    if (key === "sort") {
      return false;
    }
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    if(typeof value === "string"){
      return value !== "";
    }
    return value !==null;
  });
  const onClear=()=>{
    setFilters({
      minPrice: "",
      maxPrice: "",
      tags: [],
    });
  }
  const onChange =(key : keyof typeof filters, value: unknown) => {
    setFilters({...filters, [key]: value });
  }
  return (
    <div className='border rounded-md bg-white'>
      <div className='p-4 border-b flex items-center justify-between'>
        <p className='font-medium'> Filters </p>
        {hasAnyFilters && (
          <Button variant='ghost' size='icon' className='h-8 w-8 p-0 hover:cursor-pointer' onClick={onClear}>
            <Trash2Icon />
          </Button>
        )}
      </div>
      <ProductFilter title="Price" className=''>
        <PriceFilter 
        minPrice={filters.minPrice}
        maxPrice={filters.maxPrice}
        onMinPriceChange={(value) => onChange('minPrice', value)}
        onMaxPriceChange={(value) => onChange('maxPrice', value)}
        />
      </ProductFilter>
      <ProductFilter title="Tags" className='border-b-0'>
        <TagsFilter 
        value={filters.tags}
        onChange={(value) => onChange('tags', value)}
        />
      </ProductFilter>

    </div>
  )
}

export default ProductFilters