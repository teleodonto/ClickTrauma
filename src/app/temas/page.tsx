'use client'
import { useRouter } from 'next/navigation'

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
    <main className="min-h-screen p-6 bg-green-100 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-center">Selecione a informação desejada</h1>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        {temas.map((t) => (
          <button
            key={t.slug}
            onClick={() => router.push(`/temas/${t.slug}`)}
            className="bg-green-600 text-white py-3 px-4 rounded border border-white text-center shadow"
          >
            {t.titulo}
          </button>
        ))}
      </div>
    </main>
  )
}