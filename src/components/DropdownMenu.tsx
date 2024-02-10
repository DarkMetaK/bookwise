'use client'

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import { List, ChartLineUp, Binoculars, User } from '@phosphor-icons/react'

import { ActiveLink } from '@/components/ActiveLink'
import { LogoutButton } from './LogoutButton'

export function DropdownMenu({
  isAuthenticated,
}: {
  isAuthenticated: boolean
}) {
  function handleCloseDropdown() {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
  }

  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger className="text-gray-100">
        <List size={24} />
      </RadixDropdownMenu.Trigger>

      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content
          align="end"
          className="w-60 space-y-2 rounded-md bg-gray-700 p-6 shadow-lg"
        >
          <RadixDropdownMenu.Item>
            <ActiveLink href="/home" onClick={handleCloseDropdown}>
              <ChartLineUp size={24} />
              Início
            </ActiveLink>
          </RadixDropdownMenu.Item>

          <RadixDropdownMenu.Item>
            <ActiveLink href="/discover" onClick={handleCloseDropdown}>
              <Binoculars size={24} /> Explorar
            </ActiveLink>
          </RadixDropdownMenu.Item>

          {isAuthenticated && (
            <>
              <RadixDropdownMenu.Item>
                <ActiveLink href="/profile" onClick={handleCloseDropdown}>
                  <User size={24} />
                  Perfil
                </ActiveLink>
              </RadixDropdownMenu.Item>

              <RadixDropdownMenu.Separator className="h-[1px] bg-gray-500" />

              <RadixDropdownMenu.Item>
                <LogoutButton />
              </RadixDropdownMenu.Item>
            </>
          )}
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  )
}
