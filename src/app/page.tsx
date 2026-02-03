'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Home() {
  const router = useRouter()

  const handlePerfilSelect = (perfil: string) => {
    router.push('/temas')
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Container mobile centralizado */}
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg relative">
        
        {/* Área branca superior (40%) */}
        <div className="bg-white px-6 py-8 text-center" style={{ height: '40%' }}>
          {/* Logo como imagem */}
          <div className="mb-4">
            <Image
              src="/images/logo.jpeg"
              alt="clickTrauma"
              width={200}
              height={120}
              className="mx-auto"
            />
          </div>
          
          {/* Texto adicional */}
          <p className="text-gray-600 text-sm leading-relaxed">
            Informações sobre Trauma em Dentes Decíduos baseadas em evidências ao seu alcance - basta um click.
          </p>
        </div>
        {/* Área inferior verde (60%) */}
        <div className="bg-[#8BC34A] h-[60vh] flex flex-col justify-start px-6 pt-6">
          {/* Call to Action */}
          <p className="text-white text-center mb-6 font-medium">
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