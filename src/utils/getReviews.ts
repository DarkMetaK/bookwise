'use server'

import { prisma } from '@/libs/prisma'

export async function getReviews(
  page = 0,
  userId: string | undefined = undefined,
) {
  const reviews = await prisma.rating.findMany({
    skip: page * 5,
    take: 5,
    where: {
      user_id: userId,
    },
    include: {
      user: {
        select: {
          id: true,
          image: true,
          name: true,
        },
      },
      book: {
        select: {
          id: true,
          name: true,
          cover_url: true,
          author: true,
        },
      },
    },
  })

  return reviews
}
