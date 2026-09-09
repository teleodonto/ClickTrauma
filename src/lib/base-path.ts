/**
 * Prefixo sob o qual a aplicacao e publicada.
 *
 * Em producao o ClickTrauma vive numa subpasta (ex.: /clicktrauma), definida
 * em NEXT_PUBLIC_BASE_PATH no momento do build. Em desenvolvimento fica vazio.
 *
 * O Next aplica o basePath sozinho no JS, no CSS e nos <Link>, mas NAO no
 * atributo src de <Image> quando images.unoptimized esta ligado (necessario
 * para exportacao estatica). Arquivos de /public precisam ser prefixados a mao
 * — dai este helper.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** Monta o caminho de um arquivo servido de /public. */
export function asset(caminho: string): string {
  return `${BASE_PATH}${caminho}`
}
