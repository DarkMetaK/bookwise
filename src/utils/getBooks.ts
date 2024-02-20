'use server'

import { prisma } from '@/libs/prisma'

export async function getBooks(
  page = 0,
  selectedCategory: string | null = null,
) {
  const books = await prisma.book.findMany({
    skip: page * 10,
    take: 10,
    where: selectedCategory
      ? {
          categories: {
            some: {
              category: {
                name: selectedCategory,
              },
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

  return books
}
