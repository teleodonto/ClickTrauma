import Link from 'next/link'
import { CabecalhoMarca } from '@/components/logo-clicktrauma'

export default function NaoEncontrada() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center sm:p-4">
      <div className="w-full max-w-[375px] min-h-screen bg-white shadow-lg flex flex-col">

        <CabecalhoMarca />

        <div className="flex-1 px-6 py-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-xl font-semibold text-gray-800 mb-3">
            Página não encontrada
          </h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            O endereço acessado não existe ou foi alterado. Isso costuma
            acontecer com links antigos ou salvos nos favoritos.
          </p>
        </div>

        {/* Sempre oferecer uma saida: um beco sem saida numa pagina de erro e
            o que mais faz o usuario abandonar o app. */}
        <div className="sticky bottom-0 bg-white px-6 pt-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] border-t border-gray-200 space-y-3">
          <Link
            href="/temas"
            className="flex items-center justify-center w-full bg-[#8BC34A] text-gray-900 py-3 px-6 rounded-lg font-medium text-base hover:bg-[#7AB23A] transition-colors"
          >
            Ir para os temas
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium text-base hover:bg-gray-50 transition-colors"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  )
}
