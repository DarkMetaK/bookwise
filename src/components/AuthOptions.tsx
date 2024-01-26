'use client'

import Image from 'next/image'
import { signIn } from 'next-auth/react'

import googleLogo from '@/assets/Google.svg'
import githubLogo from '@/assets/Github.svg'
import rocketLogo from '@/assets/RocketLaunch.svg'

interface IAuthOptionsProps {
  includesVisitorOption?: boolean
}

export function AuthOptions({
  includesVisitorOption = false,
}: IAuthOptionsProps) {
  return (
    <ul className="flex flex-col gap-4">
      <li>
        <button
          className="w-full px-6 py-5 rounded-lg bg-gray-600 text-lg leading-relaxed text-gray-200 font-bold flex items-center gap-5 cursor-pointer transition-colors hover:bg-gray-700"
          onClick={async () => await signIn('google')}
        >
          <Image src={googleLogo} alt="logo da Googl" width={32} height={32} />
          Entrar com Google
        </button>
      </li>
      <li>
        <button
          className="w-full px-6 py-5 rounded-lg bg-gray-600 text-lg leading-relaxed text-gray-200 font-bold flex items-center gap-5 cursor-pointer transition-colors hover:bg-gray-700"
          onClick={async () => await signIn('github')}
        >
          <Image src={githubLogo} alt="logo do GitHub" width={32} height={32} />
          Entrar com GitHub
        </button>
      </li>
      {includesVisitorOption && (
        <li>
          <button className="w-full px-6 py-5 rounded-lg bg-gray-600 text-lg leading-relaxed text-gray-200 font-bold flex items-center gap-5 cursor-pointer transition-colors hover:bg-gray-700">
            <Image
              src={rocketLogo}
              alt="Ícone de um foguete roxo decolando"
              width={32}
              height={32}
            />
            Acessar como visitante
          </button>
        </li>
      )}
    </ul>
  )
}
