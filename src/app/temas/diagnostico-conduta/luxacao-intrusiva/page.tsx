import Link from 'next/link'
import Image from 'next/image'
import { asset } from '@/lib/base-path'

export default function LuxacaoIntrusivaPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center sm:p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative flex flex-col">
        
        {/* Título centralizado */}
        <div className="bg-white px-6 py-8 text-center border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">
            Luxação intrusiva
          </h1>
        </div>

        {/* Área de conteúdo */}
        <div className="flex-1 bg-white px-6 py-6 overflow-y-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm space-y-6">
            
            {/* Diagnóstico */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Diagnóstico: Luxação intrusiva</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                O dente está geralmente deslocado através da tábua óssea vestibular ou colidindo com o dente permanente sucessor (parcial) ou o dente não está em boca (total).
              </p>
            </div>

            {/* Radiografia */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Radiografia:</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                É obrigatória. Quando o ápice está deslocado na direção da placa óssea labial, a ponta apical pode ser visualizada radiograficamente e o dente parece mais curto que o contralateral. Quando o ápice está deslocado em direção ao germe do dente permanente, a ponta apical não pode ser vista radiograficamente e o dente parece alongado.
              </p>
            </div>

            {/* Conduta clínica */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Conduta clínica:</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Deve-se aguardar reposicionamento espontâneo do dente, independente da direção de deslocamento. A melhora espontânea na posição do dente intruído geralmente ocorre dentro de 6 meses - Em alguns casos, isso pode levar 1 ano.
              </p>
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
              
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={asset("/images/luxacao intrusiva Foto.jpeg")}
                    alt="Luxação intrusiva - Foto clínica"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={asset("/images/luxacao intrusiva RX.jpeg")}
                    alt="Luxação intrusiva - Radiografia"
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

