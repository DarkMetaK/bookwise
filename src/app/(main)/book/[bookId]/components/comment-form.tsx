'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Star } from '@phosphor-icons/react'

import { Comment } from './comment'

interface ICommentFormProps {
  reviews: {
    id: string
    rate: number
    description: string
    created_at: Date
    book_id: string
    user_id: string
    user: {
      id: string
      image: string | null
      name: string | null
    }
  }[]
}

export function CommentForm({ reviews }: ICommentFormProps) {
  const { data, status } = useSession()

  return (
    <section className="space-y-4">
      <p className="text-sm leading-relaxed text-gray-200">Avaliações</p>

      {status === 'authenticated' && (
        <article className="space-y-5 rounded-lg bg-gray-700 p-6">
          <header className="flex items-center justify-between max-xs:flex-col max-xs:gap-2">
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src={data.user.image || ''}
                  alt=""
                  width={40}
                  height={40}
                  className="aspect-square w-full rounded-full border border-blue-100 object-cover"
                />
              </div>

              <strong className="leading-relaxed text-gray-100">
                {data.user.name}
              </strong>
            </div>

            <div className="flex items-center gap-1 text-purple-100">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={28} weight="regular" />
              ))}
            </div>
          </header>

          <textarea
            placeholder="Escreva sua avaliação"
            className="h-40 w-full resize-none rounded-[4px] border border-gray-500  bg-gray-800 px-5 py-3 text-sm leading-relaxed text-gray-100 placeholder:text-gray-400"
          />
        </article>
      )}

      <ul className="space-y-3">
        {reviews.map((review) => (
          <li key={review.id}>
            <Comment {...review} />
          </li>
        ))}
      </ul>
    </section>
  )
}
