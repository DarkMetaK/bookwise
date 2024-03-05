'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Check } from '@phosphor-icons/react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Comment } from './comment'
import { StarRating } from './star-rating'

const commentSchema = z.object({
  comment: z.string().max(450, 'O comentário deve ter até 450 caracteres'),
  rating: z.coerce.number().int().positive().max(5),
})
type CommentSchemaType = z.infer<typeof commentSchema>

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

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CommentSchemaType>({
    resolver: zodResolver(commentSchema),
  })

  async function handleSubmitNewComment(data: CommentSchemaType) {
    console.log(data)
  }

  return (
    <section className="space-y-4">
      <p className="text-sm leading-relaxed text-gray-200">Avaliações</p>

      {status === 'authenticated' && (
        <form
          className="space-y-5 rounded-lg bg-gray-700 p-6"
          onSubmit={handleSubmit(handleSubmitNewComment)}
        >
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

            <Controller
              control={control}
              name="rating"
              render={({
                field: { name, onChange },
                fieldState: { error },
              }) => (
                <StarRating
                  name={name}
                  onChange={onChange}
                  error={error?.message}
                />
              )}
            />
          </header>

          <div className="w-full space-y-3">
            <textarea
              {...register('comment')}
              placeholder="Escreva sua avaliação"
              className="h-40 w-full resize-none rounded-[4px] border border-gray-500  bg-gray-800 px-5 py-3 text-sm leading-relaxed text-gray-100 placeholder:text-gray-400"
            />

            <button
              type="submit"
              className="ml-auto flex items-center justify-center rounded bg-gray-600 p-2 leading-none text-blue-100 hover:bg-gray-500"
            >
              <span className="sr-only">Inserir comentário</span>
              <Check size={24} className="leading-none" />
            </button>
          </div>
        </form>
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
