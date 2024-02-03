import { Sidebar } from '@/components/Sidebar'

export default async function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex gap-24 p-5">
      <Sidebar />
      {children}
    </div>
  )
}
