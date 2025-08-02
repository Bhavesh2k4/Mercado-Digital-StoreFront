import { BookmarkCheckIcon, ListFilterIcon, SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import Categoriesidebar from './categoriessidebar'
import { Button } from '@/components/ui/button'
import { useTRPC } from '@/trpc/client'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const SearchInput = ({disabled,defaultValue,onChange}: {disabled?:boolean,defaultValue?:string|undefined,onChange?:(value:string)=>void}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const trpc=useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());
  const [searchValue, setSearchValue] = useState(defaultValue || "");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange?.(searchValue);
    }, 400);

    return () => {
      clearTimeout(timeoutId);
    };
  },[searchValue, onChange]);
  return (
    <div className='flex items-center gap-2 w-full'>
      <Categoriesidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen}/>
        <div className='w-full relative'>
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500"/>
            <Input className='pl-10' placeholder='Search' disabled={disabled} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </div>
        <Button variant={"elevated"} className='size-12 shrink-0 flex lg:hidden' onClick={() => setIsSidebarOpen(true)}>
            <ListFilterIcon className='size-6' />
        </Button>
        {session.data?.user && (
          <Button variant={'elevated'} asChild>
            <Link prefetch href='/library'>
              <BookmarkCheckIcon />
              <span className=''>Library</span>
            </Link>
          </Button>
        )}
    </div>
  )
}

export default SearchInput