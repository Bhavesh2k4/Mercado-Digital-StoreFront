"use client"
import {Button} from '@/components/ui/button';
import React from 'react'
import { cn } from '@/lib/utils';
import { useRef,useState } from 'react';
import SubCategoryDropdown from './subcategory-dropdown';
import Link from 'next/link';
import { CategoriesGetManyOutput } from '@/modules/categories/types';

interface Props{
    category: CategoriesGetManyOutput[1];
    isActive?: boolean;
    isNavigationHovered?: boolean;
}
const CategoryDropdown = ({ category, isActive, isNavigationHovered }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const onMouseEnter = () => {    
        setIsOpen(true);
        console.log('Mouse entered dropdown:', category.name);
    };
    const onMouseLeave = () => {
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        if (category.subcategories?.length){
            setIsOpen(!isOpen);
        }
    };
  return (
    <div className='relative' ref={dropdownRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={toggleDropdown}>
        <div className='relative'>
            <Button variant="elevated" className={cn("h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white   hover:border-primary text-black", isActive && !isNavigationHovered && "bg-white border-primary", isOpen && "bg-white border-primary")}>
                <Link href={`/${category.slug === 'all' ? '' : category.slug}`}>
                    {category.name}
                </Link>
            </Button>
            {category.subcategories && category.subcategories.length > 0 && (
                <div className={cn("absolute opacity-0 -bottom-3 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px]border-l-transparent border-r-transparent border-b-black left-1/2 -translate-x-1/2", isOpen && "opacity-100")} />
            )}
        </div>
        <SubCategoryDropdown 
            category={category}
            isOpen={isOpen} 
        />
    </div>
  )
}

export default CategoryDropdown