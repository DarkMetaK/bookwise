'use client'

import { useState, useEffect } from 'react'
import { Binoculars } from '@phosphor-icons/react'

import { SearchInput } from '@/components/search-input'
import { Tag } from './components/tag'

interface IBookProps {
  id: string
  name: string
  author: string
  cover_url: string
  ratings: {
    rate: number
  }[]
  categories: {
    book_id: string
    categoryId: string
  }[]
}

interface ICategoriesProps {
  id: string
  name: string
}

export default function Discover() {
  const [books, setBooks] = useState<IBookProps[]>([])
  const [categories, setCategories] = useState<ICategoriesProps[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch(
          `api/books${selectedCategory ? `?category=${selectedCategory}` : ''}`,
        )
        const json = await response.json()
        setBooks(json)
      } catch (error) {
        console.error(error)
      }
    }
    fetchBooks()
  }, [selectedCategory])

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('api/categories')
        const json = await response.json()
        setCategories(json)
      } catch (error) {
        console.error(error)
      }
    }
    fetchCategories()
  }, [])

  async function handleSearchBookOrAuthor(text: string) {
    console.log(text)
  }

  function handleChangeActiveCategory(value: string | null) {
    setSelectedCategory(value)
  }

  return (
    <main className="mr-24 h-[calc(100vh-2.5rem)] flex-1 overflow-hidden pt-12 max-xl:mr-12 max-md:mr-0 max-md:pt-[5.25rem]">
      <header className="mb-10 flex w-full items-center justify-between gap-5 max-md:mb-5 max-md:flex-col max-md:items-start">
        <div className="flex items-center gap-3">
          <Binoculars size={32} className="text-blue-100" />
          <strong className="text-2xl font-bold leading-snug text-gray-100">
            Explorar
          </strong>
        </div>

        <div className="w-full max-w-[26.5rem] max-md:max-w-none">
          <SearchInput
            handleSubmit={handleSearchBookOrAuthor}
            placeholder="Buscar livro ou autor"
          />
        </div>
      </header>

      <section>
        <div className="flex flex-wrap items-center justify-start gap-3">
          <Tag
            selected={!selectedCategory}
            onClick={() => handleChangeActiveCategory(null)}
          >
            Tudo
          </Tag>
          {categories.map((category) => (
            <Tag
              key={category.id}
              selected={selectedCategory === category.id}
              onClick={() => handleChangeActiveCategory(category.id)}
            >
              {category.name}
            </Tag>
          ))}
        </div>

        {JSON.stringify(books, null, 2)}
      </section>
    </main>
  )
}
