'use client'

import { useState, InputHTMLAttributes, ReactNode, FormEvent } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

interface ISearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  handleSubmit: (text: string) => Promise<void>
}

export function SearchInput({
  icon,
  handleSubmit,
  ...props
}: ISearchInputProps) {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmitInput(e: FormEvent<HTMLFormElement>) {
    setIsLoading(true)
    e.preventDefault()
    await handleSubmit(text)
    setIsLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmitInput}
      className="flex w-full items-center justify-between rounded border border-gray-500 bg-gray-800 focus-within:border-blue-200"
    >
      <input
        className="peer flex-1 bg-transparent px-5 py-3 text-sm leading-relaxed placeholder:text-gray-400 focus:outline-none"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        {...props}
      />
      <button
        disabled={isLoading}
        type="submit"
        className="flex items-center px-5 py-3 leading-none text-gray-500 focus:text-blue-200 focus:outline-none peer-focus:text-blue-200"
      >
        {icon || <MagnifyingGlass size={20} />}
      </button>
    </form>
  )
}
