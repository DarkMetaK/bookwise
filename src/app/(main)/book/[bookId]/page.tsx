import { prisma } from '@/libs/prisma'
import { BookCard } from './components/book-card'

export default async function Book({ params }: { params: { bookId: string } }) {
  const bookData = await prisma.book.findUniqueOrThrow({
    where: {
      id: params.bookId,
    },
    include: {
      ratings: true,
      categories: {
        include: {
          category: true,
        },
      },
    },
  })

  return (
    <main className="mr-24 h-[calc(100vh-2.5rem)] flex-1 overflow-y-scroll pt-12 max-xl:mr-12 max-md:mr-0 max-md:pt-[5.25rem]">
      <BookCard
        {...bookData}
        categories={bookData.categories.map((category) => category.category)}
      />
    </main>
  )
}
