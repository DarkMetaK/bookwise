import Link from 'next/link'
import { ChartLineUp, CaretRight } from '@phosphor-icons/react/dist/ssr'

import { prisma } from '@/libs/prisma'

import { ReviewItem } from '@/components/ReviewItem'

export default async function Home() {
  const reviews = await prisma.rating.findMany({
    take: 5,
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

  return (
    <main className="mr-24 mt-12 flex flex-1 flex-wrap items-start justify-between gap-8">
      <section className="flex w-full max-w-[38rem] flex-col gap-10">
        <header className="flex items-center gap-3">
          <ChartLineUp size={32} className="text-blue-100" />
          <h1 className="text-2xl font-bold leading-snug text-gray-100">
            Início
          </h1>
        </header>

        <section>
          <h2 className="pb-4 text-sm leading-relaxed text-gray-100">
            Avaliações mais recentes
          </h2>
          <ul className="flex flex-col gap-3">
            {reviews.map((review) => (
              <li key={review.id}>
                <ReviewItem
                  {...review}
                  created_at={String(review.created_at)}
                />
              </li>
            ))}
          </ul>
        </section>
      </section>

      <aside className="w-[20rem]">
        <header className="flex items-baseline justify-between">
          <h2 className="pb-4 text-sm leading-relaxed text-gray-100">
            Livros populares
          </h2>
          <Link
            href="/"
            className="flex items-center gap-2 px-2 py-1 text-sm font-bold leading-relaxed text-purple-100 transition-colors hover:text-purple-200"
          >
            Ver todos <CaretRight size={16} />
          </Link>
        </header>
      </aside>
    </main>
  )
}
