import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';
import React from 'react'

interface props{
    activeCategory?: string | null;
    activeCategoryName?: string |null;
    activeSubCategoryName?: string | null;
}

const BreadcrumbNavigation = ({activeCategory,activeCategoryName,activeSubCategoryName}:props) => {
    if (!activeCategoryName || activeCategory === "all"){
        return null;
    }
    return (
        <Breadcrumb>
            <BreadcrumbList>
            {
                activeSubCategoryName? (
                    <>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild className='font-medium text-xl underline text-primary' >
                                <Link href={`/${activeCategory}`}>
                                    {activeCategoryName}
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className='text-primary font-bold text-lg'>
                            /
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage className='font-medium text-lg' >
                                {activeSubCategoryName}
                            </BreadcrumbPage>
                        </BreadcrumbItem>

                    </>
                ):
                (
                    <BreadcrumbItem>
                        <BreadcrumbPage className='font-medium text-xl underline text-primary' >
                                {activeCategoryName}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                )
            }
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default BreadcrumbNavigation