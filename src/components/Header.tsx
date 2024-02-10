import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { SignIn } from '@phosphor-icons/react/dist/ssr'

import { authOptions } from '@/libs/authOptions'
import Logo from '@/assets/logo.svg'

import { ActiveLink } from '@/components/ActiveLink'
import { DropdownMenu } from '@/components/DropdownMenu'

export async function Header() {
  const isAuthenticated = await getServerSession(authOptions)

  return (
    <header className="fixed left-0 top-0 hidden h-16 w-full max-w-full items-center justify-between gap-4 border-b border-gray-600 bg-gray-700 px-5 max-md:flex">
      <div className="max-h-8 w-full max-w-32">
        <Image src={Logo} alt="Logo da Bookwise" />
      </div>

      <nav className="flex items-center gap-10">
        {!isAuthenticated && (
          <ActiveLink href="/login">
            <SignIn size={24} />
            Login
          </ActiveLink>
        )}

        <DropdownMenu isAuthenticated={!!isAuthenticated} />
      </nav>
    </header>
  )
}
