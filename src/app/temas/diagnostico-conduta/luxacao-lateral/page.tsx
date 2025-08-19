import Link from 'next/link'
import Image from 'next/image'

export default function LuxacaoLateralPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative flex flex-col">
        
        {/* Título centralizado */}
        <div className="bg-white px-6 py-8 text-center border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">
            Luxação lateral
          </h1>
        </div>

        {/* Área de conteúdo */}
        <div className="flex-1 bg-white px-6 py-6 overflow-y-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm space-y-6">
            
            {/* Diagnóstico */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Diagnóstico: Luxação lateral</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                O dente está deslocado, usualmente, em uma direção palatina/lingual ou labial. O aumento apical do espaço do ligamento periodontal é melhor visualizado com uma exposição radiográfica com filme oclusal.
              </p>
            </div>

            {/* Conduta clínica */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Conduta clínica:</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">• Sem interferência oclusal ou interferência mínima:</p>
                  <p className="text-gray-700 text-sm leading-relaxed ml-4">
                    Deixe que o dente se reposicione espontaneamente (a reposição espontânea geralmente ocorre dentro de 6 meses). Acompanhamento: 1 semana - 6-8 semanas - 6 meses - 1 ano, até o dente esfoliar.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">• Deslocamento severo:</p>
                  <p className="text-gray-700 text-sm leading-relaxed ml-4">
                    Duas opções: (a) extração; (b) reposição do dente + contenção flexível por 04 semanas. Acompanhamento: 1 semana - 4 semanas (remoção da contenção) - 8 semanas - 6 meses - 1 ano, até o dente esfoliar.
                  </p>
                </div>
              </div>
            </div>

            {/* Possíveis complicações */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Possíveis complicações:</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Escurecimento dental progressivo, Fístula ou abscesso; Alteração na erupção do sucessor, anquilose.
              </p>
            </div>

            {/* Imagens */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-gray-800">Imagens clínicas:</h3>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/luxacao lateral Foto.jpg"
                    alt="Luxação lateral - Foto clínica"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className="bg-white px-6 py-6 border-t border-gray-200">
          <div className="flex space-x-3">
            <Link 
              href="/temas/diagnostico-conduta"
              className="inline-flex items-center justify-center w-1/2 bg-[#8BC34A] text-white py-3 px-6 rounded-lg font-medium text-base hover:bg-[#7AB23A] transition-colors"
            >
              Voltar
            </Link>
            <Link 
              href="/temas"
              className="inline-flex items-center justify-center w-1/2 bg-[#8BC34A] text-white py-3 px-6 rounded-lg font-medium text-base hover:bg-[#7AB23A] transition-colors"
            >
              Voltar ao Menu
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

