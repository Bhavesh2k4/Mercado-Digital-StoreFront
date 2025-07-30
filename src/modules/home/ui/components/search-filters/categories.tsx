"use client"
import CategoryDropdown from './category-dropdown'
import React, { useEffect, useRef,useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ListFilterIcon } from 'lucide-react'
import Categoriesidebar from './categoriessidebar'
import { CategoriesGetManyOutput } from '@/modules/categories/types'
import { useParams } from 'next/navigation'

const Categories = ({data}: {data: CategoriesGetManyOutput}) => {
  const params = useParams();
  const categoryParam= params.category as string | undefined;
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const viewAllRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(data.length);
  const [isAnyHovered, setIsAnyHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const activeCategory= categoryParam || "all";
  const activeCategoryIndex=data.findIndex((category) => category.slug === activeCategory);
  const activeCategoryHidden = activeCategoryIndex >= visibleCount && activeCategoryIndex != -1;

  useEffect(() => {
    const calculateVisible = () => {
      if (!containerRef.current || !measureRef.current || !viewAllRef.current) {
        return;
      }
        const containerWidth = containerRef.current.offsetWidth;
        const viewAllWidth = viewAllRef.current.offsetWidth;
        const availableWidth = containerWidth - viewAllWidth;
        const items = Array.from(measureRef.current.children);
        let totalWidth = 0;
        let visible =0;
        for (const item of items) {
          const width = item.getBoundingClientRect().width;
          if (totalWidth + width > availableWidth) {
            break;
          } else {
            totalWidth += width;
            visible++;
          }
        }
        setVisibleCount(visible);
    }

    const resizeObserver = new ResizeObserver(calculateVisible);
    resizeObserver.observe(containerRef.current!);
    return () => {
      resizeObserver.disconnect();
    }
  },[data.length]);

  return (
    <div className='relative w-full h-8'>
      <Categoriesidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen}/>
      {/* Hidden div to measure the width of the categories */}
      <div ref={measureRef} className='flex absolute opacity-0 pointer-events-none' style={{position:'fixed',top:-9999, left:-9999}}>
        {data.map((category) => (
            <div key={category.id}>
                <CategoryDropdown 
                    category={category} 
                    isActive={activeCategory === category.slug} 
                    isNavigationHovered={false}
                />
            </div>
        ))}
      </div>
      { /* Container for visible categories */}
      <div ref={containerRef} className='flex flex-nowrap items-center' onMouseEnter={() => setIsAnyHovered(true)} onMouseLeave={() => setIsAnyHovered(false)}>
        {data.slice(0, visibleCount).map((category) => (
            <div key={category.id}>
                <CategoryDropdown 
                    category={category} 
                    isActive={activeCategory === category.slug} 
                    isNavigationHovered={isAnyHovered}
                />
            </div>
        ))}

        <div ref={viewAllRef} className='shrink-0'>
          <Button variant="elevated" className={cn("h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white   hover:border-primary text-black", activeCategoryHidden && !isAnyHovered && "bg-white border-primary")} onClick={() => setIsSidebarOpen(true)}>
            View All
            <ListFilterIcon className='ml-2'/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Categories