import React from 'react'
interface props{
    params: Promise<{
        category: string;
    }>
}
const CategoryPage  = async ({params}:props) => {
    const { category } = await params;
  return (
    <div>Category : {category}</div>
  )
}

export default CategoryPage