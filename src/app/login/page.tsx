import Image from 'next/image'

import heroImage from '@/assets/Hero.svg'
import { AuthOptions } from '@/components/AuthOptions'

export default function Login() {
  return (
    <main className="p-5 flex items-center justify-center">
      <div className="w-[37.5rem] h-[57rem] overflow-hidden rounded-[10px]">
        <Image
          src={heroImage}
          alt="Imagem de uma mulher loira deitada no sofá com quatro almofadas, enquanto se concentra na leitura de um livro. A imagem está sobreposta por uma camada com cores azuladas, e no centro da foto em destaque, encontra-se a logo da plataforma BookWise"
          className="object-cover"
        />
      </div>

      <article className="flex flex-col gap-10 max-w-96 mx-auto">
        <div>
          <h1 className="text-2xl leading-snug text-gray-100 font-bold mb-[2px]">
            Boas vindas!
          </h1>
          <p className="text-gray-200 leading-relaxed">
            Faça seu login ou acesse como visitante.
          </p>
        </div>

        <AuthOptions includesVisitorOption />
      </article>
    </main>
  )
}
