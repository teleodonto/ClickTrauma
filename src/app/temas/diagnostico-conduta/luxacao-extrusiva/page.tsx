import Link from 'next/link'

export default function LuxacaoExtrusivaPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative flex flex-col">
        
        {/* Título centralizado */}
        <div className="bg-white px-6 py-8 text-center border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">
            Luxação extrusiva
          </h1>
        </div>

        {/* Área de conteúdo */}
        <div className="flex-1 bg-white px-6 py-6 overflow-y-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm space-y-6">
            
            {/* Diagnóstico */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Diagnóstico: Luxação extrusiva</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Deslocamento parcial do dente para fora do alvéolo. O dente apresenta-se alongado e pode ter mobilidade excessiva. Radiograficamente, o espaço do ligamento periodontal apresenta-se aumentado apicalmente.
              </p>
            </div>

            {/* Conduta clínica */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Conduta clínica:</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                A decisão do tratamento é baseada no grau de deslocamento, mobilidade, interferência oclusal, formação radicular, e na habilidade de cooperação da criança com a situação:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700 text-sm leading-relaxed">
                  • Se não tiver interferência oclusal: não interferir e aguardar a reposição espontânea;
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  • No caso de pequena interferência oclusal (extrusão &lt;3mm), deve-se realizar um desgaste.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  • Extrusão &gt; 3mm ou mobilidade excessiva: Extração;
                </p>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mt-3">
                O acompanhamento deve ser feito após: 1 semana - 6-8 semanas - 1 ano, até a erupção do permanente.
              </p>
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

