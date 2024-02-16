import { prisma } from '@/libs/prisma'

export async function GET() {
  const categoriesResponse = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
  })

  return new Response(JSON.stringify(categoriesResponse), {
    status: 200,
  })
}
