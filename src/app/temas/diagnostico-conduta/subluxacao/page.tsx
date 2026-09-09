import Link from 'next/link'
import Image from 'next/image'
import { asset } from '@/lib/base-path'

export default function SubluxacaoPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center sm:p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative flex flex-col">
        
        {/* Título centralizado */}
        <div className="bg-white px-6 py-8 text-center border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">
            Subluxação
          </h1>
        </div>

        {/* Área de conteúdo */}
        <div className="flex-1 bg-white px-6 py-6 overflow-y-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm space-y-6">
            
            {/* Diagnóstico */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Diagnóstico: Subluxação</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                O dente apresenta aumento da mobilidade, sem deslocamento. Pode ser observado sangramento no sulco gengival. Sem anormalidades radiográficas. Para observar possíveis sinais de deslocamento, recomenda-se uma radiografia oclusal, a qual será utilizada como referência no caso de complicações futuras.
              </p>
            </div>

            {/* Conduta clínica */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Conduta clínica:</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Não é necessário tratamento. Observar clinicamente. Orientar uso de escova macia e Clorexidina sem álcool a 0,12% topicamente na área afetada com haste flexível, 2 vezes por semana.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Controle clínico uma semana após e de 6 a 8 semanas.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Se o dente apresentar alteração de cor escura, deve ser controlado cuidadosamente, para se detectar sinais de infecção, o mais rápido possível.
              </p>
            </div>

            {/* Imagens */}
            <div className="space-y-4">
              
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={asset("/images/subluxacao Foto.jpeg")}
                    alt="Subluxação - Foto clínica"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={asset("/images/subluxacao-esquema.jpeg")}
                    alt="Subluxação - Esquema ilustrativo"
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

