import Link from 'next/link'
import Image from 'next/image'

export default function FraturaEsmalteDentinaPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative flex flex-col">
        
        {/* Título centralizado */}
        <div className="bg-white px-6 py-8 text-center border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">
            Fratura de esmalte e dentina
          </h1>
        </div>

        {/* Área de conteúdo */}
        <div className="flex-1 bg-white px-6 py-6 overflow-y-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm space-y-6">
            
            {/* Diagnóstico */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Diagnóstico: Fratura de esmalte e dentina</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Quando há fratura envolvendo esmalte e dentina, sem exposição pulpar. A avaliação inicial envolve exame clínico e radiográfico (em caso de fraturas extensas, a fim de avaliar possível acometimento pulpar). Deve-se avaliar na radiografia presença de fratura radicular associada ou lesão óssea.
              </p>
            </div>

            {/* Conduta clínica */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Conduta clínica:</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Se for possível, selar a dentina envolvida com ionômero de vidro para prevenir microinfiltração ou irritação pulpar.
              </p>
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
              <h3 className="text-base font-semibold text-gray-800">Imagens clínicas:</h3>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/fratura esmalte e dentina.jpg"
                    alt="Fratura de esmalte e dentina - Imagem clínica"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/fratura esmalte e dentinaFoto.jpg"
                    alt="Fratura de esmalte e dentina - Foto clínica"
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

