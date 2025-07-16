import Link from 'next/link'

const conteudos: Record<string, { titulo: string; texto: string }> = {
  'fratura-esmalte': {
    titulo: 'Fratura de Esmalte',
    texto: `Diagnóstico: Fratura de esmalte
Conduta clínica: Arredondar as bordas cortantes.
Acompanhamento: Controle em 4 semanas, observar alteração de cor e mobilidade.`
  },
  'fratura-dentina': {
    titulo: 'Fratura de Esmalte e Dentina',
    texto: `Diagnóstico: Fratura envolvendo esmalte e dentina, sem exposição pulpar.
Conduta: Selar a dentina com ionômero de vidro.
Acompanhamento: Controle em 4 semanas, observar alterações.`
  }
  // adicione outros...
}

export default function DiagnosticoPage({ params }: { params: { slug: string } }) {
  const data = conteudos[params.slug]

  if (!data) {
    return <p className="p-6">Diagnóstico não encontrado.</p>
  }

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{data.titulo}</h1>
      <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap mb-6">{data.texto}</pre>
      <Link href="/temas" className="text-blue-600 underline">
        ← Voltar para seleção
      </Link>
    </main>
  )
}