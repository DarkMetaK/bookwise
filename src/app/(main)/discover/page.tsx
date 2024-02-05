import { Binoculars } from '@phosphor-icons/react/dist/ssr'

export default function Discover() {
  return (
    <main className="mt-12">
      <header className="flex items-center gap-3">
        <Binoculars size={32} className="text-blue-100" />
        <strong className="text-2xl font-bold leading-snug text-gray-100">
          Explorar
        </strong>
      </header>
    </main>
  )
}
