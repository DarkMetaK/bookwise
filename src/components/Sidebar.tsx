import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { ChartLineUp, Binoculars, User } from '@phosphor-icons/react/dist/ssr'

import { authOptions } from '@/libs/authOptions'
import Logo from '@/assets/logo.svg'

import { ActiveLink } from '@/components/ActiveLink'
import { LogoutButton } from '@/components/LogoutButton'

export async function Sidebar() {
  const isAuthenticated = await getServerSession(authOptions)

  return (
    <aside className="flex h-[calc(100vh-2.5rem)] min-w-60 flex-col gap-16 rounded-xl bg-sidebar bg-center bg-no-repeat px-12 pb-6 pt-10">
      <div className="mx-auto max-h-8 max-w-32">
        <Image src={Logo} alt="Logo da Bookwise" />
      </div>

      <nav className="mx-auto flex max-w-fit flex-col gap-4">
        <ActiveLink href="/home">
          <ChartLineUp size={24} />
          Início
        </ActiveLink>
        <ActiveLink href="/discover">
          <Binoculars size={24} /> Explorar
        </ActiveLink>

        {isAuthenticated && (
          <ActiveLink href="/profile">
            <User size={24} />
            Perfil
          </ActiveLink>
        )}
      </nav>

      <LogoutButton />
    </aside>
  )
}
