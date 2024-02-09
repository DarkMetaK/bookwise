import Image from 'next/image'
import { Star } from '@phosphor-icons/react/dist/ssr'

interface IBookItemProps {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: Date
  ratings: {
    rate: number
  }[]
  imageSize?: 'sm' | 'md'
}

export function BookItem({ imageSize = 'md', ...props }: IBookItemProps) {
  const totalStars = Math.round(
    props.ratings.reduce((acc, item) => (acc += item.rate), 0),
  )

  return (
    <div className="flex gap-5 rounded-lg bg-gray-700 px-5 py-4">
      <div
        className={`w-full ${imageSize === 'md' ? 'max-w-[6.75rem]' : 'max-w-[4rem]'} overflow-hidden rounded-[4px]`}
      >
        <Image src={`/${props.cover_url}`} alt="" width={108} height={152} />
      </div>

      <div className="flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col">
          <strong className="truncate leading-snug text-gray-100">
            {props.name}
          </strong>
          <p className="text-sm leading-relaxed text-gray-400">
            {props.author}
          </p>
        </div>

        <div className="flex items-center gap-1 text-purple-100">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={16}
              weight={index < totalStars ? 'fill' : 'regular'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
