import {
  User,
  BookOpen,
  Books,
  UserList,
  BookmarkSimple,
} from '@phosphor-icons/react/dist/ssr'

import { prisma } from '@/libs/prisma'

import { InfiniteScroll } from '@/components/infinite-scroll'
import { SearchInput } from '@/components/search-input'
import Image from 'next/image'

export default async function Profile({
  params,
}: {
  params: { userId: string }
}) {
  const userInfo = await prisma.user.findUniqueOrThrow({
    where: {
      id: params.userId,
    },
    select: {
      image: true,
      name: true,
      Rating: {
        select: {
          id: true,
          book: true,
          book_id: true,
          user: true,
          user_id: true,
          rate: true,
          description: true,
          created_at: true,
        },
      },
    },
  })

  const totalReviews = userInfo.Rating.length
  const totalAmountOfReadPages = userInfo.Rating.reduce(
    (acc, review) => (acc += review.book.total_pages),
    0,
  )
  const totalAmountOfReviewedBooks = userInfo.Rating.filter(
    (review, index) => userInfo.Rating.indexOf(review) === index,
  ).length

  const totalAmountOfReadAuthors = userInfo.Rating.filter(
    (review, index) => userInfo.Rating.indexOf(review) === index,
  ).length

  return (
    <main className="mr-24 h-[calc(100vh-2.5rem)] flex-1 overflow-hidden pt-12 max-xl:mr-12 max-md:mr-0 max-md:pt-[5.25rem]">
      <header className="mb-10 flex items-center gap-3 max-md:mb-5">
        <User size={32} className="text-blue-100" />
        <h1 className="text-2xl font-bold leading-snug text-gray-100">
          Perfil
        </h1>
      </header>

      <div className="grid h-[calc(100%-4.5rem)] grid-cols-[minmax(30rem,_1fr)_minmax(auto,20rem)] gap-16 max-xl:grid-cols-1">
        <section className="overflow-y-scroll pr-5 max-md:overflow-y-hidden max-md:pr-0">
          <div>
            <SearchInput placeholder="Buscar livro avaliado" />
          </div>
          <ul className="flex flex-col gap-3">
            <InfiniteScroll
              totalItems={totalReviews}
              initialItems={userInfo.Rating}
              type="reviews"
            />
          </ul>
        </section>

        <section>
          <header className="flex w-full flex-col items-center gap-5">
            <Image
              width={72}
              height={72}
              className="w-full max-w-[4.5rem] rounded-full border border-blue-100 object-cover"
              alt=""
              src={userInfo.image || '/images/default-avatar.png'}
            />
            <h2 className="text-xl font-bold leading-snug text-gray-100">
              {userInfo.name}
            </h2>
          </header>

          <ul className="mx-auto flex max-w-fit flex-col gap-10 py-5">
            <li className="flex items-center gap-5 text-blue-100">
              <BookOpen size={32} />
              <div>
                <strong className="font-bold leading-snug text-gray-200">
                  {totalAmountOfReadPages}
                </strong>
                <p className="leading-relaxed text-gray-300">Páginas lidas</p>
              </div>
            </li>
            <li className="flex items-center gap-5 text-blue-100">
              <Books size={32} />
              <div>
                <strong className="font-bold leading-snug text-gray-200">
                  {totalAmountOfReviewedBooks}
                </strong>
                <p className="leading-relaxed text-gray-300">
                  Livros avaliados
                </p>
              </div>
            </li>
            <li className="flex items-center gap-5 text-blue-100">
              <UserList size={32} />
              <div>
                <strong className="font-bold leading-snug text-gray-200">
                  8
                </strong>
                <p className="leading-relaxed text-gray-300">Autores lidos</p>
              </div>
            </li>
            <li className="flex items-center gap-5 text-blue-100">
              <BookmarkSimple size={32} />
              <div>
                <strong className="font-bold leading-snug text-gray-200">
                  Computação
                </strong>
                <p className="leading-relaxed text-gray-300">
                  Categoria mais lida
                </p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
