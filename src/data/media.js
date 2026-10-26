// Fotos e vídeos da página /fotos-e-videos.html.
// Para adicionar uma foto ou vídeo: coloque o arquivo em /public, crie o item aqui (foto: em
// data/site.js > photos; vídeo: em data/videos.js) e escolha a categoria. As abas do filtro
// só aparecem para categorias que tenham pelo menos um item.
import { photos } from './site.js'
import { videos, videoCategories } from './videos.js'

// Categoria de cada foto (mesmos ids das categorias de vídeo).
const photoCategory = {
  familias: 'musicalizacao',
  tecidoAzul: 'musicalizacao',
  criancaSala: 'musicalizacao',
  alunaGuitarra: 'guitarra',
  alunoGuitarra: 'guitarra',
  festivalCertificados: 'festival',
  festivalPalco: 'festival',
  comunidade: 'eventos',
  eventoTambor: 'eventos',
  eventoBolhas: 'eventos',
  aniversario: 'eventos',
  equipe: 'escola',
}

const fotos = Object.entries(photoCategory).map(([key, category]) => ({
  ...photos[key],
  key,
  type: 'foto',
  category,
}))

const clipes = videos.map((v) => ({
  type: 'video',
  key: v.id,
  category: v.category,
  src: v.src,
  poster: v.poster,
  width: v.width,
  height: v.height,
  alt: v.title,
}))

export const media = [...clipes, ...fotos]

export const mediaCategories = videoCategories.filter((c) => media.some((item) => item.category === c.id))

// Seleção de fotos exibida na página inicial.
export const homePhotos = ['familias', 'festivalCertificados', 'alunaGuitarra', 'comunidade', 'eventoBolhas', 'tecidoAzul']
  .map((key) => fotos.find((f) => f.key === key))
