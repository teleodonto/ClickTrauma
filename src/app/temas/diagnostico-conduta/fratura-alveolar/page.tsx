import Link from 'next/link'

export default function FraturaAlveolarPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center sm:p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative flex flex-col">
        
        {/* Título centralizado */}
        <div className="bg-white px-6 py-8 text-center border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">
            Fratura alveolar
          </h1>
        </div>

        {/* Área de conteúdo */}
        <div className="flex-1 bg-white px-6 py-6 overflow-y-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm space-y-6">
            
            {/* Diagnóstico */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Diagnóstico: Fratura alveolar</h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Envolve o osso alveolar e pode se estender ao osso adjacente. Nesse caso, é comum a presença de mobilidade e/ou deslocamento do fragmento, podendo ser encontrada interferência oclusal.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                A linha de fratura horizontal para os ápices dos dentes decíduos e os permanentes sucessores será evidenciada radiograficamente. A radiografia lateral pode também dar informação sobre a relação entre as duas dentições, e se o segmento está deslocado na direção apical.
              </p>
            </div>

            {/* Conduta clínica */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Conduta clínica:</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Reposicionar qualquer segmento deslocado e esplintar com uma contenção flexível por 04 semanas. É necessário monitorar o dente na região da linha de fratura.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                O controle clínico deve ser feito uma semana após o tratamento. Em 04 semanas para remoção da contenção, em 08 semanas e posteriormente, um monitoramento clínico e radiográfico a cada ano subsequente, até a esfoliação.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Importante:</strong> Acompanhamento adicional aos 6 anos de idade é indicado para monitorar a erupção do dente permanente.
              </p>
            </div>

            {/* Possíveis complicações */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Possíveis complicações:</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Escurecimento dental progressivo; Fístula ou abscesso; Alteração na erupção do sucessor.
              </p>
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className="sticky bottom-0 z-10 bg-white px-6 pt-6 before:pointer-events-none before:absolute before:inset-x-0 before:-top-6 before:h-6 before:bg-gradient-to-t before:from-white before:to-transparent pb-[calc(1.5rem+env(safe-area-inset-bottom))] border-t border-gray-200">
          <div className="flex space-x-3">
            <Link 
              href="/temas/diagnostico-conduta"
              className="inline-flex items-center justify-center w-1/2 bg-[#8BC34A] text-gray-900 py-3 px-6 rounded-lg font-medium text-base hover:bg-[#7AB23A] transition-colors"
            >
              Voltar
            </Link>
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

