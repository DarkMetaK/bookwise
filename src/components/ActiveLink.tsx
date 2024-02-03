'use client'

import { usePathname } from 'next/navigation'
import Link, { LinkProps } from 'next/link'

interface IActiveLinkProps extends LinkProps {
  children: React.ReactNode
}

export function ActiveLink({ children, ...rest }: IActiveLinkProps) {
  const pathName = usePathname()
  const { href } = rest

  const isActive = pathName === href

  return (
    <Link
      {...rest}
      className={`leading-relaxed flex items-center gap-3 py-2 transition-colors hover:text-gray-100 ${isActive ? 'text-gray-100 font-bold active-link relative' : 'text-gray-400 font-normal'}`}
    >
      {children}
    </Link>
  )
}
