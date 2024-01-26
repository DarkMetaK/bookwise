import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { authOptions } from '@/lib/auth'

export default async function Home() {
  const session = await getServerSession(authOptions)
  const user = session?.user

  if (!user) {
    redirect('/login')
  }

  return (
    <div>
      <h1>Bem vindo</h1>
      <p>{user.name}</p>
    </div>
  )
}
