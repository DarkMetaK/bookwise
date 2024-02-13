import { Binoculars } from '@phosphor-icons/react/dist/ssr'

import { SearchInput } from '@/components/search-input'

export default function Discover() {
  async function handleSearchBookOrAuthor(text: string) {
    'use server'
    console.log(text)
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
    </main>
  )
}
