'use client'
import { useRouter } from 'next/navigation'

const temas = [
  { slug: 'fratura-esmalte', titulo: 'Fratura de Esmalte' },
  { slug: 'fratura-dentina', titulo: 'Fratura de Esmalte e Dentina' },
  { slug: 'fratura-exposicao-pulpar', titulo: 'Fratura com Exposição Pulpar' },
  { slug: 'fratura-raiz', titulo: 'Fratura de Raiz' },
  { slug: 'luxacao-extrusiva', titulo: 'Luxação Extrusiva' },
  { slug: 'luxacao-intrusiva', titulo: 'Luxação Intrusiva' },
  { slug: 'avulsao', titulo: 'Avulsão' }
]

export default function Temas() {
  const router = useRouter()

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Selecione o Diagnóstico</h1>
      <div className="grid gap-4 max-w-xl mx-auto">
        {temas.map((t) => (
          <button
            key={t.slug}
            onClick={() => router.push(`/temas/${t.slug}`)}
            className="bg-gray-100 hover:bg-blue-100 p-4 rounded-lg border text-left"
          >
            {t.titulo}
          </button>
        ))}
      </div>
    </main>
  )
}