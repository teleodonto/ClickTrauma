'use client'
import { useRouter } from 'next/navigation'
import { CabecalhoMarca } from '@/components/logo-clicktrauma'

export default function Home() {
  const router = useRouter()

  const handlePerfilSelect = (perfil: string) => {
    router.push('/temas')
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center sm:p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative flex flex-col">
        
        {/* Nome da aplicacao para leitores de tela: a tela se
            identifica visualmente pela logo, que e uma imagem. */}
        <h1 className="sr-only">ClickTrauma</h1>

        <CabecalhoMarca>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Informações sobre Trauma em Dentes Decíduos baseadas em evidências ao seu alcance - basta um click.
          </p>
        </CabecalhoMarca>

        {/* Área inferior verde (60%) */}
        <div className="bg-[#8BC34A] flex-1 flex flex-col justify-start px-6 pt-6 pb-8">
          {/* Call to Action */}
          <p className="text-gray-900 text-center mb-6 font-medium">
            Selecione seu perfil:
          </p>
          
          {/* Botões de perfil */}
          <div className="space-y-3">
            <button 
              onClick={() => handlePerfilSelect('odontopediatra')}
              className="w-full bg-white text-gray-700 py-4 rounded-lg font-medium text-base hover:bg-gray-50 transition-colors"
            >
              Odontopediatra
            </button>
            
            <button 
              onClick={() => handlePerfilSelect('cirurgiao-dentista')}
              className="w-full bg-white text-gray-700 py-4 rounded-lg font-medium text-base hover:bg-gray-50 transition-colors"
            >
              Cirurgião-dentista
            </button>
            
            <button 
              onClick={() => handlePerfilSelect('professor')}
              className="w-full bg-white text-gray-700 py-4 rounded-lg font-medium text-base hover:bg-gray-50 transition-colors"
            >
              Professor
            </button>
            
            <button 
              onClick={() => handlePerfilSelect('aluno')}
              className="w-full bg-white text-gray-700 py-4 rounded-lg font-medium text-base hover:bg-gray-50 transition-colors"
            >
              Aluno
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}