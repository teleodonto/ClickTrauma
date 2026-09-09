import Image from 'next/image'
import { asset } from '@/lib/base-path'

/**
 * Logo da aplicacao, com tamanho unico.
 *
 * Antes cada tela declarava a propria logo: 200x120 na home e 180x108 no menu
 * e no submenu, dentro de cabecalhos com espacamentos diferentes. O resultado
 * era a marca pular 15px para baixo e encolher 20px ao navegar da home para os
 * temas. Centralizar aqui impede que as medidas voltem a divergir.
 *
 * Use sempre junto de <CabecalhoMarca>, que padroniza o espacamento em volta.
 */
export function LogoClickTrauma() {
  return (
    <Image
      src={asset('/images/logo.jpeg')}
      alt="clickTrauma"
      width={200}
      height={120}
      priority
      className="mx-auto"
    />
  )
}

/**
 * Cabecalho branco com a logo, identico em todas as telas que exibem a marca.
 * O conteudo opcional aparece abaixo da logo (a home usa para a chamada).
 */
export function CabecalhoMarca({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-white px-6 pt-8 pb-6 text-center">
      <LogoClickTrauma />
      {children}
    </div>
  )
}
