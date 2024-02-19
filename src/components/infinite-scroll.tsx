'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { getReviews } from '@/utils/getReviews'

import { ReviewItem } from '@/components/review-item'
import { FadeLoader } from 'react-spinners'

interface IReviewItemProps {
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
  book: {
    id: string
    name: string
    cover_url: string
    author: string
  }
}

interface IInfiniteScrollProps {
  totalItems: number
  initialItems: IReviewItemProps[] | undefined
}

export function InfiniteScroll({
  totalItems,
  initialItems,
}: IInfiniteScrollProps) {
  const [items, setItems] = useState<IReviewItemProps[]>(initialItems || [])
  const [page, setPage] = useState(0)
  const [ref, inView] = useInView()

  async function loadMoreItems() {
    const nextPage = page + 1
    const items = await getReviews(nextPage)

    if (items.length) {
      setPage(nextPage)
      setItems((prevItems) => [...prevItems, ...items])
    }
  }

  useEffect(() => {
    if (inView) {
      loadMoreItems()
    }
  }, [inView])

  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          <ReviewItem {...item} />
        </li>
      ))}

      {items.length < totalItems && (
        <div ref={ref} className="flex w-full justify-center">
          <FadeLoader color="#fff" />
        </div>
      )}
    </>
  )
}
