import React from 'react'
import SearchInput from './search-input';
import Categories from './categories';
import { customCategory } from '../types';

const SearchFilters = ({data}: {data: customCategory[]}) => {
  return (
    <div className='px-4 lg:px-12 py-8 order-b flex flex-col gap-4 w-full'>
      <SearchInput data={data}/>
      <div className='hidden lg:block'>
        <Categories data={data} />
      </div>
    </div>
  )
}

export default SearchFilters