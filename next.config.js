/** @type {import('next').NextConfig} */

// Publicado como subpasta de bvo.teleodonto.uerj.br (ex.: /clicktrauma).
// Em desenvolvimento fica vazio, e o app roda na raiz de localhost:3000.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  // Exportacao estatica: o Nginx serve HTML puro, sem processo Node na VM.
  output: 'export',
  basePath,
  // Gera cada rota como <rota>/index.html, que e o formato que o Nginx
  // resolve sozinho via "index index.html".
  trailingSlash: true,
  // A otimizacao de imagem do Next exige servidor; na exportacao estatica
  // as imagens sao servidas como arquivos comuns.
  images: { unoptimized: true },
}

module.exports = nextConfig
