// Vídeos do site. Para adicionar um vídeo:
// 1. Coloque o arquivo .mp4 (H.264) e uma imagem de capa .webp em /public/videos/
// 2. Adicione um item na lista `videos` com a categoria correta.
// As abas da página /videos.html e os links "Ver vídeos" dos cards de aula aparecem sozinhos.

export const videoCategories = [
  { id: 'escola', label: 'A escola' },
  { id: 'musicalizacao', label: 'Musicalização infantil' },
  { id: 'canto', label: 'Canto' },
  { id: 'guitarra', label: 'Guitarra' },
  { id: 'bateria', label: 'Bateria' },
  { id: 'violino', label: 'Violino' },
  { id: 'ukulele', label: 'Ukulele' },
  { id: 'festival', label: 'Festival' },
  { id: 'eventos', label: 'Eventos' },
]

export const videos = [
  {
    id: 'apresentacao-escola',
    category: 'escola',
    title: 'Conheça a Música Criativa em 1 minuto',
    description: 'Um passeio pelas salas da escola, com a apresentação da equipe.',
    src: '/videos/apresentacao-escola.mp4',
    poster: '/videos/apresentacao-escola.webp',
    width: 576,
    height: 1024,
    duration: '1:03',
    featured: true,
    // Fala do vídeo (as legendas já estão na imagem). Serve como transcrição acessível.
    transcript:
      'Bem-vindos à escola Música Criativa! Somos uma equipe formada por professores altamente qualificados, com vasta experiência no ensino musical, e o mais importante: somos apaixonados por música e pelo ensino musical. Temos o maior prazer em contribuir para o crescimento musical de nossos alunos. Nossa missão é proporcionar às crianças, adolescentes e adultos a possibilidade de aprender música de uma forma lúdica e prazerosa, pensando na música como forma de educação e desenvolvimento humano.',
  },
]

export const featuredVideo = videos.find((v) => v.featured)

export const videosByCategory = (categoryId) => videos.filter((v) => v.category === categoryId)

export const videosPageUrl = (categoryId) =>
  categoryId ? `/fotos-e-videos.html#${categoryId}` : '/fotos-e-videos.html'
