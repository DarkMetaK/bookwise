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
  return (
    <section className="space-y-4">
      <p className="text-sm leading-relaxed text-gray-200">Avaliações</p>

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
