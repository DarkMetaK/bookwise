import { ButtonHTMLAttributes } from 'react'

interface ITagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean
}

export function Tag({ children, selected, ...rest }: ITagProps) {
  return (
    <button
      data-selected={selected}
      className="flex items-center justify-center gap-2 rounded-full border border-purple-100 bg-transparent px-4 py-1 leading-relaxed text-purple-100 data-[selected=true]:border-purple-200 data-[selected=true]:bg-purple-200 data-[selected=true]:text-gray-100"
      {...rest}
    >
      {children}
    </button>
  )
}
