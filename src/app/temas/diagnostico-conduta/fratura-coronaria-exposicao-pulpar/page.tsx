import Link from 'next/link'
import Image from 'next/image'

export default function FraturaCoronariaExposicaoPulparPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative flex flex-col">
        
        {/* Título centralizado */}
        <div className="bg-white px-6 py-8 text-center border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">
            Fratura coronária com exposição pulpar
          </h1>
        </div>

        {/* Área de conteúdo */}
        <div className="flex-1 bg-white px-6 py-6 overflow-y-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm space-y-6">
            
            {/* Diagnóstico */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Diagnóstico: Fratura coronária com exposição pulpar</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Quando a fratura envolve esmalte, dentina e há exposição da polpa.
              </p>
            </div>

            {/* Radiografia */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Radiografia:</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                É fundamental para diagnóstico e avaliação do estágio de desenvolvimento da raiz.
              </p>
            </div>

            {/* Conduta clínica */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Conduta clínica:</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Há duas opções a se discutir com a família:
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">• Pulpectomia parcial:</p>
                  <p className="text-gray-700 text-sm leading-relaxed ml-4">
                    Remoção da polpa coronária afetada e preservação radicular (se viável). Uso de pasta antibiótica/corticosteroide (e.g., CTZ) ou hidróxido de cálcio como medicamento intracanal e fechamento da cavidade com CIV ou resina composta.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">• Extração:</p>
                  <p className="text-gray-700 text-sm leading-relaxed ml-4">
                    Indicada se a fratura comprometer a raiz ou houver risco de lesão ao dente permanente subjacente. Em casos onde a pulpectomia parcial não é possível de ser realizada. O tratamento depende da maturidade e da colaboração da criança.
                  </p>
                </div>
              </div>
            </div>

            {/* Acompanhamento */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Acompanhamento e possíveis complicações:</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Controle em 1 mês, 3 meses e 1 ano (ou conforme necessidade). Monitorar sinais de infecção, reabsorção ou falha do tratamento.
              </p>
            </div>

            {/* Imagens */}
            <div className="space-y-4">
              
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/fratura coronaria com expolsicao.jpeg"
                    alt="Fratura coronária com exposição pulpar - Imagem clínica"
                    width={600}
                    height={600}
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

