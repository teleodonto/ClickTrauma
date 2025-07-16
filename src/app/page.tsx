'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handlePerfilSelect = (perfil: string) => {
    router.push('/temas')
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo ao ClickTrauma</h1>
      <p className="mb-8 max-w-md">
        Informações sobre Trauma em Dentes Decíduos baseadas em evidências ao seu alcance – basta um click.
      </p>
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        <button onClick={() => handlePerfilSelect('odontopediatra')} className="bg-blue-600 text-white py-6 rounded-xl">Odontopediatra</button>
        <button onClick={() => handlePerfilSelect('cirurgiao-dentista')} className="bg-blue-600 text-white py-6 rounded-xl">Cirurgião-dentista</button>
        <button onClick={() => handlePerfilSelect('professor')} className="bg-blue-600 text-white py-6 rounded-xl">Professor</button>
        <button onClick={() => handlePerfilSelect('aluno')} className="bg-blue-600 text-white py-6 rounded-xl">Aluno</button>
      </div>
    </main>
  )
}