import Image from 'next/image'

import heroImage from '@/assets/Hero.svg'
import googleLogo from '@/assets/Google.svg'
import githubLogo from '@/assets/Github.svg'
import rocketLogo from '@/assets/RocketLaunch.svg'

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

        <ul className="flex flex-col gap-4">
          <li>
            <button className="w-full px-6 py-5 rounded-lg bg-gray-600 text-lg leading-relaxed text-gray-200 font-bold flex items-center gap-5 cursor-pointer transition-colors hover:bg-gray-700">
              <Image
                src={googleLogo}
                alt="logo da Googl"
                width={32}
                height={32}
              />
              Entrar com Google
            </button>
          </li>
          <li>
            <button className="w-full px-6 py-5 rounded-lg bg-gray-600 text-lg leading-relaxed text-gray-200 font-bold flex items-center gap-5 cursor-pointer transition-colors hover:bg-gray-700">
              <Image
                src={githubLogo}
                alt="logo do GitHub"
                width={32}
                height={32}
              />
              Entrar com GitHub
            </button>
          </li>
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
        </ul>
      </article>
    </main>
  )
}
