import React from 'react'
interface props{
    params: Promise<{
        category: string;
        subcategory:string
    }>
}

const SubCategoryPage = async ({params}:props) => {
    const { category , subcategory} = await params;
  return (
    <div>
        Category : {category} / SubCategory : {subcategory}
    </div>
  )
}

export default SubCategoryPage