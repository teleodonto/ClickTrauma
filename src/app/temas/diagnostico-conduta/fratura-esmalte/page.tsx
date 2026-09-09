import Link from 'next/link'
import Image from 'next/image'
import { asset } from '@/lib/base-path'

export default function FraturaEsmaltePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative flex flex-col">
        
        {/* Título centralizado */}
        <div className="bg-white px-6 py-8 text-center border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">
            Fratura de esmalte
          </h1>
        </div>

        {/* Área de conteúdo */}
        <div className="flex-1 bg-white px-6 py-6 overflow-y-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm space-y-6">
            
            {/* Diagnóstico */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Diagnóstico: Fratura de esmalte</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ocorre quando há uma fratura que envolve apenas o esmalte.
              </p>
            </div>

            {/* Radiografia */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Radiografia:</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Opcional; Nesse caso, não há presença de alterações radiográficas.
              </p>
            </div>

            {/* Conduta clínica */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Conduta clínica:</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Não há necessidade de tratamento urgente, a menos que haja bordas cortantes, nesse caso opte por um tratamento conservador:
              </p>
              <ul className="text-gray-700 text-sm leading-relaxed space-y-2 ml-4">
                <li>• Arredondar as bordas cortantes através de um polimento para evitar trauma nos tecidos moles como lábio, língua e mucosa jugal.</li>
                <li>• Restauração estética opcional, caso haja comprometimento estético significativo ou demanda da família.</li>
              </ul>
            </div>

            {/* Acompanhamento */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Acompanhamento e possíveis complicações:</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Deve ser realizado um controle clínico em 04 semanas e posteriormente conforme for necessário. Deve-se observar possíveis alterações de cor como sinais de necrose pulpar (dente escurecido, presença de abcesso) e mobilidade.
              </p>
            </div>

            {/* Imagens */}
            <div className="space-y-4">
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={asset("/images/fratura de esmalte.jpeg")}
                    alt="Fratura de esmalte - Imagem clínica"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={asset("/images/fratura de esmalteFoto.jpeg")}
                    alt="Fratura de esmalte - Foto clínica"
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

