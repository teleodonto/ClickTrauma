import Link from 'next/link'

const conteudos: Record<string, { titulo: string; texto: string }> = {
  'trauma-deciduos': {
    titulo: 'Trauma em Dentes Decíduos',
    texto: 'Conteúdo em construção...'
  },
  'exame-radiografico': {
    titulo: 'Exame Radiográfico',
    texto: 'Conteúdo em construção...'
  },
  'primeiro-atendimento': {
    titulo: 'Primeiro Atendimento',
    texto: 'Conteúdo em construção...'
  },
  'diagnostico-conduta': {
    titulo: 'Diagnóstico e conduta clínica',
    texto: 'Conteúdo em construção...'
  },
  'possiveis-alteracoes': {
    titulo: 'Possíveis alterações',
    texto: 'Conteúdo em construção...'
  },
  'como-evitar': {
    titulo: 'Como evitar?',
    texto: 'Conteúdo em construção...'
  }
}

export default function DiagnosticoPage({ params }: { params: { slug: string } }) {
  const data = conteudos[params.slug]

  if (!data) {
    return <main className="min-h-screen p-6 bg-green-100"><p className="p-6">Diagnóstico não encontrado.</p></main>
  }

  return (
    <main className="min-h-screen p-6 bg-green-100 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">{data.titulo}</h1>
        <pre className="bg-white p-4 rounded whitespace-pre-wrap mb-6 shadow-md">{data.texto}</pre>
        <Link href="/temas" className="text-blue-600 underline">
          ← Voltar para seleção
        </Link>
      </div>
    </main>
  )
}