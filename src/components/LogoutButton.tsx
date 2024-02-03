'use client'

import { useSession, signOut } from 'next-auth/react'
import { SignIn, SignOut } from '@phosphor-icons/react'
import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'

export function LogoutButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { status, data } = useSession()
  const isAuthenticated = status === 'authenticated'

  if (!isAuthenticated) {
    return (
      <button
        {...props}
        className="mt-auto text-gray-200 font-bold leading-relaxed flex items-center gap-3 py-2 transition-colors hover:text-gray-100"
      >
        Fazer login <SignIn size={20} className="text-blue-100" />
      </button>
    )
  }

  return (
    <button
      {...props}
      onClick={async () => await signOut()}
      className="mt-auto text-gray-200 font-normal leading-relaxed flex items-center gap-3 py-2 transition-colors group"
    >
      <Image
        src={data?.user?.image as string}
        alt=""
        width={32}
        height={32}
        className="object-cover rounded-full border border-blue-100"
      />
      {data?.user?.name}
      <SignOut size={20} className="text-red-500 group-hover:text-red-300" />
    </button>
  )
}
