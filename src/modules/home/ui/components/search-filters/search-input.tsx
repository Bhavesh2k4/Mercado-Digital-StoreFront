"use client"
import React from 'react'
import { BookmarkCheckIcon, ListFilterIcon, SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import Categoriesidebar from './categoriessidebar'
import { Button } from '@/components/ui/button'
import { useTRPC } from '@/trpc/client'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'


const SearchInput = ({disabled}: {disabled?:boolean}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const trpc=useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  return (
    <div className='flex items-center gap-2 w-full'>
      <Categoriesidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen}/>
        <div className='w-full relative'>
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500"/>
            <Input className='pl-10' placeholder='Search' disabled={disabled} />
        </div>
        <Button variant={"elevated"} className='size-12 shrink-0 flex lg:hidden' onClick={() => setIsSidebarOpen(true)}>
            <ListFilterIcon className='size-6' />
        </Button>
        {session.data?.user && (
          <Button variant={'elevated'} asChild>
            <Link href='/library'>
              <BookmarkCheckIcon />
              <span className=''>Library</span>
            </Link>
          </Button>
        )}
    </div>
  )
}

export default SearchInput