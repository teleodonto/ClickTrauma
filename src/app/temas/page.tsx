'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { asset } from '@/lib/base-path'

const temas = [
  { slug: 'trauma-deciduos', titulo: 'Trauma em Dentes Decíduos' },
  { slug: 'exame-radiografico', titulo: 'Exame Radiográfico' },
  { slug: 'primeiro-atendimento', titulo: 'Primeiro Atendimento' },
  { slug: 'diagnostico-conduta', titulo: 'Diagnóstico e conduta clínica' },
  { slug: 'possiveis-alteracoes', titulo: 'Possíveis alterações' },
  { slug: 'como-evitar', titulo: 'Como evitar?' }
]

export default function Temas() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center sm:p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative">

        {/* Área superior branca (25%) */}
        <div className="bg-white h-[25vh] flex flex-col items-center justify-center px-6 text-center">
          {/*
            Volta para a selecao de perfil. Fica no canto superior esquerdo,
            posicao convencional de retorno, fora do fluxo dos botoes de tema
            para nao competir com a navegacao principal. E um link de verdade
            (nao um botao com onClick) para funcionar com teclado, leitor de
            tela e abrir em nova aba. O rotulo diz o resultado da acao, que e
            mais claro que uma seta sozinha.
          */}
          <Link
            href="/"
            className="absolute top-2 left-2 inline-flex items-center gap-1 min-h-[44px] px-3 text-sm text-gray-700 rounded-lg hover:text-gray-900 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 transition-colors"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 0 1 0 1.06L9.06 10l3.73 3.71a.75.75 0 1 1-1.06 1.06l-4.25-4.24a.75.75 0 0 1 0-1.06l4.25-4.24a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
            Trocar perfil
          </Link>

          {/* Logo como imagem */}
          <div>
            <Image
              src={asset("/images/logo.jpeg")}
              alt="clickTrauma"
              width={180}
              height={120}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Área inferior verde (75%) */}
        <div className="bg-[#8BC34A] h-[75vh] flex flex-col justify-start px-6 pt-8">
          {/* Titulo da pagina: a tela se identifica pela logo, entao o h1 fica
              acessivel a leitores de tela sem alterar o visual. */}
          <h1 className="sr-only">Temas</h1>

          {/* Botões de temas */}
          <div className="space-y-4">
            {temas.map((tema) => (
              <button
                key={tema.slug}
                onClick={() => router.push(`/temas/${tema.slug}`)}
                className="w-full bg-[#8BC34A] text-gray-900 py-4 px-6 rounded-lg font-medium text-base border-2 border-white hover:bg-[#7AB23A] transition-colors"
              >
                {tema.titulo}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
