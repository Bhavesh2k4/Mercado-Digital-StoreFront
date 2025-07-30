import React, { useState } from 'react'
import {Sheet, SheetContent, SheetHeader, SheetTitle} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';

import { Category } from "@/payload-types"

export type customCategory = Category & {
    subcategories: Category[];
}

interface props {
    open ?: boolean;
    onOpenChange ?: (open: boolean) => void;
    //data: customCategory[];
}
const Categoriesidebar = ({ open, onOpenChange }: props) => {
    const trpc = useTRPC();
    const { data } = useQuery(trpc.categories.getMany.queryOptions());
    const router = useRouter();
    const handleOpenChange = (open: boolean) => {
        setSelectedCategory(null);
        setParentCategory(null);
        onOpenChange?.(open);
    };
    const [parentCategory, setParentCategory] = useState<customCategory[]| null>(null);
    const [selectedCategory, setSelectedCategory] = useState<customCategory | null>(null);
    const currentCategories = parentCategory ?? data ?? [];

    const handleCategoryClick = (category: customCategory) => {
        if (category.subcategories && category.subcategories.length > 0) {
            setParentCategory(category.subcategories as customCategory[]);
            setSelectedCategory(category);
        } else {
            if(parentCategory && selectedCategory) {
                router.push(`/${selectedCategory.slug}/${category.slug}`);
            }
            else{
                if (category.slug === 'all') {
                    router.push('/');
                }
                else {
                    router.push(`/${category.slug}`);
                }
            }
            handleOpenChange(false);
        }
    };

    const backgrondColor = selectedCategory?.color || "white"; // Default background color if not specified

    const handleBackClick = () => {
        if (parentCategory) {
            setParentCategory(null);
            setSelectedCategory(null);
        }
    }
  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
        <SheetContent side="left" className='p-0 transition-none' style={{backgroundColor: backgrondColor}}>
            <SheetHeader className='p-4 border-b'>
                <SheetTitle>Categories</SheetTitle>
            </SheetHeader>
            <ScrollArea className='flex flex-col overflow-y-auto h-full pb-2'>
                {parentCategory && (
                    <button onClick={() => {handleBackClick()}} className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium'>
                        <ChevronLeftIcon className='mr-2 h-4 w-4' />
                    </button>
                )}
                {currentCategories.map((category) => (
                    <button
                        key={category.slug}
                        onClick={() => {
                            handleCategoryClick(category);
                        }}
                        className='w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center text-base font-medium'>
                        {category.name}
                        {category.subcategories && category.subcategories.length > 0 && (
                            <ChevronRightIcon className='ml-2 h-4 w-4' />
                        )}
                    </button>
                ))}

            </ScrollArea>
        </SheetContent>
    </Sheet>
  )
}

export default Categoriesidebar