import Link from 'next/link'
import Image from 'next/image'

export default function FraturaCoroaRaizPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative flex flex-col">
        
        {/* Título centralizado */}
        <div className="bg-white px-6 py-8 text-center border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">
            Fratura de coroa e raiz
          </h1>
        </div>

        {/* Área de conteúdo */}
        <div className="flex-1 bg-white px-6 py-6 overflow-y-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm space-y-6">
            
            {/* Diagnóstico */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Diagnóstico: Fratura de coroa e raiz</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Quando a fratura envolve esmalte, dentina e estrutura radicular, a polpa pode estar ou não exposta. Em fraturas lateralmente posicionadas, a extensão em relação à margem gengival poderá ser vista radiograficamente.
              </p>
            </div>

            {/* Radiografia */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Radiografia:</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Deve ser realizada a fim de avaliar a relação com o germe do dente permanente e identificar possíveis múltiplos fragmentos.
              </p>
            </div>

            {/* Conduta clínica */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Conduta clínica:</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Deve-se verificar mobilidade do fragmento, exposição pulpar e sintomatologia. Nesse caso, prioriza-se extração do dente.
              </p>
            </div>

            {/* Acompanhamento */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Acompanhamento e possíveis complicações:</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Controles em 4 semanas, 3 meses e 1 ano (avaliar vitalidade, infecção ou reabsorção) e posteriormente até a erupção do sucessor.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Em relação a possíveis complicações no dente permanente: Hipoplasia do esmalte; Erupção ectópica ou atrasada; Malformação da coroa/raiz do sucessor.
              </p>
            </div>

            {/* Imagens */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-gray-800">Imagens clínicas:</h3>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/fratura de coroa e raiz 1.jpg"
                    alt="Fratura de coroa e raiz - Imagem clínica 1"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/fratura de coroa e raiz 2.jpg"
                    alt="Fratura de coroa e raiz - Imagem clínica 2"
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

