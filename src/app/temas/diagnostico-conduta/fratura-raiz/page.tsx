import Link from 'next/link'
import Image from 'next/image'
import { asset } from '@/lib/base-path'

export default function FraturaRaizPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center sm:p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative flex flex-col">
        
        {/* Título centralizado */}
        <div className="bg-white px-6 py-8 text-center border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">
            Fratura de raiz
          </h1>
        </div>

        {/* Área de conteúdo */}
        <div className="flex-1 bg-white px-6 py-6 overflow-y-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm space-y-6">
            
            {/* Diagnóstico */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Diagnóstico: Fratura de raiz</h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Clinicamente observa-se o fragmento coronário com possível mobilidade ou deslocado dependendo da localização da fratura. O fragmento coronário pode apresentar mobilidade e estar deslocado e pode haver interferência oclusal.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Radiografia obrigatória:</strong> Nos achados radiográficos, a fratura geralmente está localizada no terço médio ou apical.
              </p>
            </div>

            {/* Conduta clínica horizontal */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Conduta clínica em caso de fratura horizontal:</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">• Fragmento coronário não deslocado ou com deslocamento leve:</p>
                  <p className="text-gray-700 text-sm leading-relaxed ml-4">
                    Nenhuma intervenção é necessária, aguardar reposição espontânea. Monitorar após uma semana, 01 mês (radiografia de controle), 6-8 semanas e anualmente até o dente esfoliar.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">• Fragmento coronário deslocado com grande mobilidade:</p>
                  <p className="text-gray-700 text-sm leading-relaxed ml-4">
                    (a) Extração do fragmento coronário. O fragmento apical deve ser deixado para ser reabsorvido. (b) Posicionar o fragmento coronário e realizar contenção flexível por 4 semanas se instável.
                  </p>
                </div>
              </div>
            </div>

            {/* Conduta clínica vertical */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Conduta clínica em caso de fratura vertical:</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A extração é recomendada e o fragmento apical deve ser deixado para ser reabsorvido. Monitoramento clínico e radiográfico a cada ano subsequente, até a esfoliação.
              </p>
            </div>

            {/* Possíveis complicações */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Possíveis complicações:</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Reabsorção acelerada; Infecção periapical; Anquilose (em fraturas cervicais); Escurecimento dental progressivo; Fístula ou abscesso; Alteração na erupção do sucessor.
              </p>
            </div>

            {/* Imagens */}
            <div className="space-y-4">
              
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={asset("/images/fratura de raiz.jpeg")}
                    alt="Fratura de raiz - Esquema"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={asset("/images/fratura de raiz 2.jpeg")}
                    alt="Fratura de raiz - Esquema 2"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={asset("/images/fratura de raiz Foto.jpeg")}
                    alt="Fratura de raiz - Foto clínica"
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
        <div className="sticky bottom-0 bg-white px-6 pt-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] border-t border-gray-200">
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

