import Link from 'next/link'
import Image from 'next/image'
import { asset } from '@/lib/base-path'

export default function AvulsaoPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative flex flex-col">
        
        {/* Título centralizado */}
        <div className="bg-white px-6 py-8 text-center border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">
            Avulsão
          </h1>
        </div>

        {/* Área de conteúdo */}
        <div className="flex-1 bg-white px-6 py-6 overflow-y-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm space-y-6">
            
            {/* Diagnóstico */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Diagnóstico: Avulsão</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                O dente está completamente fora do alvéolo. Um exame radiográfico é essencial para garantir que o dente que falta sofreu uma intrusão total.
              </p>
            </div>

            {/* Conduta clínica */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Conduta clínica:</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                O reimplante de dentes decíduos avulsionados não é recomendável.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Controle clínico uma semana e controles clínicos e radiográficos 6 meses e 1 ano. Monitoramento clínico e radiográfico até a erupção do sucessor.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Há a possibilidade de se colocar um mantenedor de espaço estético-funcional.
              </p>
            </div>

            {/* Imagens */}
            <div className="space-y-4">
              
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={asset("/images/avulsao Foto.jpeg")}
                    alt="Avulsão - Foto clínica"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={asset("/images/avulsao RX.jpeg")}
                    alt="Avulsão - Radiografia"
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

