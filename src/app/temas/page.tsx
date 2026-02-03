'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

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
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative">
        
        {/* Área superior branca (25%) */}
        <div className="bg-white h-[25vh] flex flex-col items-center justify-center px-6 text-center">
          {/* Logo como imagem */}
          <div>
            <Image
              src="/images/logo.jpeg"
              alt="clickTrauma"
              width={180}
              height={120}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Área inferior verde (75%) */}
        <div className="bg-[#8BC34A] h-[75vh] flex flex-col justify-start px-6 pt-8">
          {/* Botões de temas */}
          <div className="space-y-4">
            {temas.map((tema) => (
              <button
                key={tema.slug}
                onClick={() => router.push(`/temas/${tema.slug}`)}
                className="w-full bg-[#8BC34A] text-white py-4 px-6 rounded-lg font-medium text-base border-2 border-white hover:bg-[#7AB23A] transition-colors"
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