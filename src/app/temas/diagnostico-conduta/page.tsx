import Link from 'next/link'
import { CabecalhoMarca } from '@/components/logo-clicktrauma'

const opcoesDiagnostico = [
  {
    slug: 'fratura-esmalte',
    titulo: 'Fratura de esmalte'
  },
  {
    slug: 'fratura-esmalte-dentina',
    titulo: 'Fratura de esmalte e dentina'
  },
  {
    slug: 'fratura-coronaria-exposicao-pulpar',
    titulo: 'Fratura coronária com exposição pulpar'
  },
  {
    slug: 'fratura-coroa-raiz',
    titulo: 'Fratura de coroa e raiz'
  },
  {
    slug: 'fratura-raiz',
    titulo: 'Fratura de raiz'
  },
  {
    slug: 'fratura-alveolar',
    titulo: 'Fratura alveolar'
  },
  {
    slug: 'concussao',
    titulo: 'Concussão'
  },
  {
    slug: 'subluxacao',
    titulo: 'Subluxação'
  },
  {
    slug: 'luxacao-extrusiva',
    titulo: 'Luxação extrusiva'
  },
  {
    slug: 'luxacao-lateral',
    titulo: 'Luxação lateral'
  },
  {
    slug: 'luxacao-intrusiva',
    titulo: 'Luxação intrusiva'
  },
  {
    slug: 'avulsao',
    titulo: 'Avulsão'
  }
]

export default function DiagnosticoCondutaPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center sm:p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative flex flex-col">
        
        <CabecalhoMarca />

        {/* Área inferior verde com botões (75%) */}
        <div className="bg-[#8BC34A] flex-1 px-6 py-8 flex flex-col justify-center space-y-4">
          <h1 className="text-gray-900 text-lg font-medium text-center mb-6">
            Diagnóstico e conduta clínica
          </h1>
          
          {opcoesDiagnostico.map((opcao) => (
            <Link
              key={opcao.slug}
              href={`/temas/diagnostico-conduta/${opcao.slug}`}
              className="bg-transparent border-2 border-white text-gray-900 py-4 px-6 rounded-lg font-medium text-center hover:bg-white hover:text-gray-900 transition-colors"
            >
              {opcao.titulo}
            </Link>
          ))}
        </div>

        {/* Botão Voltar ao Menu */}
        <div className="sticky bottom-0 bg-white px-6 pt-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] border-t border-gray-200">
          <div className="flex justify-end">
            <Link 
              href="/temas"
              className="inline-flex items-center justify-center w-1/2 bg-[#8BC34A] text-gray-900 py-3 px-6 rounded-lg font-medium text-base hover:bg-[#7AB23A] transition-colors"
            >
              Voltar ao Menu
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

