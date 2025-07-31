
import { Category } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import type { Where } from "payload";
import z from "zod";

export const productRouter = createTRPCRouter({
    getMany: baseProcedure.input(z.object({
      category:z.string().nullable().optional(),
    })).query(async ({ctx,input})=> {

            const where:Where = {};
            if(input.category){
              const categoriesData = await ctx.db.find({
                collection: 'categories',
                limit: 1,
                depth: 1,
                pagination: false,
                where: {
                  slug: {
                    equals: input.category,
                  },
                },
            });

            const formattedData = categoriesData.docs.map((doc) => ({
                          ...doc,
                          subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
                            ...(doc as Category),
                            subcategories:undefined,
                          })),
                     
                        }));

            const subcategoriesSlugs=[];
            const parentcategory = formattedData[0];
            if(parentcategory){
              subcategoriesSlugs.push(...parentcategory.subcategories.map((subcat)=>subcat.slug));
            }
              where["category.slug"] = {
                in: [parentcategory.slug, ...subcategoriesSlugs],
              };
          }
        
        const data = await ctx.db.find({
            collection: 'products',
            depth:1,
            where,
        });
            return data;
    })
})