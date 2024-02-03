import Image from 'next/image'
import { ChartLineUp, Binoculars } from '@phosphor-icons/react/dist/ssr'

import Logo from '@/assets/Logo.svg'
import { ActiveLink } from '@/components/ActiveLink'
import { LogoutButton } from '@/components/LogoutButton'

export function Sidebar() {
  return (
    <aside className="flex flex-col px-12 pt-10 pb-6 gap-16 bg-sidebar h-[calc(100vh-2.5rem)] rounded-xl">
      <div className="max-w-32 max-h-8 mx-auto">
        <Image src={Logo} alt="Logo da Bookwise" />
      </div>

      <nav className="flex flex-col gap-4 max-w-fit mx-auto">
        <ActiveLink href="/home">
          <ChartLineUp size={24} />
          Início
        </ActiveLink>
        <ActiveLink href="/explore">
          <Binoculars size={24} /> Explorar
        </ActiveLink>
      </nav>

      <LogoutButton />
    </aside>
  )
}
