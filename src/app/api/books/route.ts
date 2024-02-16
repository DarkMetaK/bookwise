import { prisma } from '@/libs/prisma'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const selectedCategory = searchParams.get('category')

  const booksResponse = await prisma.book.findMany({
    where: selectedCategory
      ? {
          categories: {
            some: {
              categoryId: selectedCategory,
            },
          },
        }
      : {},
    select: {
      id: true,
      name: true,
      author: true,
      cover_url: true,
      ratings: true,
      categories: true,
    },
  })

  return new Response(JSON.stringify(booksResponse), {
    status: 200,
  })
}
