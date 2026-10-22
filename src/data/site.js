// Conteúdo do site. Tudo que é informação comercial fica aqui para facilitar a revisão.
// Campos marcados com "CONFIRMAR" vieram dos materiais de referência (Instagram, Google)
// e precisam ser validados com a escola antes da publicação.

export const school = {
  name: 'Escola Música Criativa',
  shortName: 'Música Criativa',
  tagline: 'A gente faz porque ama!', // bio do Instagram
  // CONFIRMAR: telefone/WhatsApp do perfil no Google e dos posts
  phoneDisplay: '(31) 97305-4977',
  phoneE164: '5531973054977',
  instagram: {
    handle: '@musica.criativa',
    url: 'https://www.instagram.com/musica.criativa/',
  },
  website: {
    label: 'musicacriativa.com.br',
    url: 'https://musicacriativa.com.br',
  },
  address: {
    street: 'Rua Oscar Augusto Diniz, 106',
    district: 'Nossa Senhora de Fátima',
    city: 'Contagem',
    state: 'MG',
    zip: '32017-260',
    reference: 'Atrás da Caixa e próximo à Matriz São Gonçalo de Contagem.',
  },
}

export const fullAddress = `${school.address.street}, ${school.address.district}, ${school.address.city} – ${school.address.state}, ${school.address.zip}`

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${school.name}, ${school.address.street}, ${school.address.city} - ${school.address.state}`,
)}`

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${school.address.street}, ${school.address.district}, ${school.address.city} - ${school.address.state}, ${school.address.zip}`,
)}&output=embed`

export const messages = {
  geral: 'Olá! Gostaria de conhecer as aulas da Escola Música Criativa.',
  musicalizacao: 'Olá! Gostaria de saber mais sobre a musicalização infantil.',
  eventos: 'Olá! Gostaria de consultar informações sobre eventos musicais para aniversário.',
  festival: 'Olá! Gostaria de saber mais sobre o festival da Escola Música Criativa.',
  aula: (modalidade) => `Olá! Gostaria de saber sobre as aulas de ${modalidade} na Escola Música Criativa.`,
  outroInstrumento: 'Olá! Gostaria de saber quais instrumentos estão disponíveis para aulas na Escola Música Criativa.',
}

export const nav = [
  { id: 'inicio', label: 'Início' },
  { id: 'escola', label: 'A escola' },
  { id: 'musicalizacao', label: 'Musicalização infantil' },
  { id: 'aulas', label: 'Aulas' },
  { id: 'festival', label: 'Festival' },
  { id: 'eventos', label: 'Eventos' },
  { id: 'contato', label: 'Contato' },
]

// Modalidades confirmadas em publicações oficiais do Instagram (bio e posts "Aulas de ...").
// CONFIRMAR com a escola a lista vigente, faixas etárias e disponibilidade de turmas.
export const modalidades = [
  {
    nome: 'Musicalização infantil',
    detalhe: 'Turmas de bebês e crianças, com participação dos responsáveis.',
    destaque: true,
    anchor: '#musicalizacao',
  },
  { nome: 'Canto', detalhe: 'Aulas de voz para quem quer cantar.' },
  { nome: 'Guitarra', detalhe: 'Aulas de guitarra elétrica.' },
  { nome: 'Bateria', detalhe: 'Aulas de bateria e ritmo.' },
  { nome: 'Violino', detalhe: 'Aulas de violino.' },
  { nome: 'Ukulele', detalhe: 'Aulas de ukulele.' },
]

const img = (name, alt, { w, h, large = true } = {}) => ({
  src: `/img/${name}-640.webp`,
  srcSet: large ? `/img/${name}-640.webp 640w, /img/${name}-1280.webp 1280w` : undefined,
  full: large ? `/img/${name}-1280.webp` : `/img/${name}-640.webp`,
  alt,
  width: w,
  height: h,
})

// Textos alternativos descrevem a cena sem identificar nenhuma pessoa.
export const photos = {
  familias: img('musicalizacao-familias', 'Responsáveis e crianças sentados juntos no tapete colorido da sala de musicalização, decorada com nuvens e bandeirinhas', { w: 715, h: 889 }),
  tecidoAzul: img('musicalizacao-tecido-azul', 'Criança brinca com um grande tecido azul durante atividade na sala de musicalização com tema de nuvens', { w: 717, h: 898 }),
  criancaSala: img('musicalizacao-crianca-sala', 'Criança olha para cima, encantada, durante uma atividade na sala de musicalização', { w: 708, h: 882 }),
  alunaGuitarra: img('aluna-guitarra-palco-criativo', 'Aluna sorridente segura uma guitarra azul no Palco Criativo, ao lado de uma bateria', { w: 904, h: 901 }),
  alunoGuitarra: img('aluno-guitarra-palco-criativo', 'Aluno toca guitarra vermelha no Palco Criativo da escola', { w: 671, h: 881 }),
  festivalCertificados: img('festival-certificados', 'Alunos de várias idades no palco do festival segurando seus certificados, com professores à frente', { w: 909, h: 600 }),
  festivalPalco: img('festival-palco', 'Apresentação musical no palco do festival, com músicos e o telão da Escola Música Criativa ao fundo', { w: 887, h: 426 }),
  equipe: img('equipe-professores', 'Equipe de professores da Escola Música Criativa reunida e sorrindo em uma das salas', { w: 901, h: 507 }),
  comunidade: img('piquenique-musical-comunidade', 'Grande grupo de famílias, crianças e professores reunidos ao ar livre sob bandeirinhas coloridas', { w: 909, h: 756 }),
  eventoTambor: img('evento-bebe-tambor', 'Bebê explora um tambor durante atividade musical em uma festa ao ar livre', { w: 501, h: 845, large: false }),
  eventoBolhas: img('evento-criancas-bolhas', 'Crianças brincam entre bolhas de sabão em uma comemoração ao ar livre', { w: 513, h: 871, large: false }),
  aniversario: img('aniversario-familia', 'Família reunida em frente à mesa de bolo de uma festa de aniversário infantil', { w: 505, h: 817, large: false }),
  fachada: img('fachada-escola', 'Fachada da Escola Música Criativa, com parede amarela, muro avermelhado e grades brancas', { w: 829, h: 508 }),
}

export const gallery = [
  { ...photos.familias, tag: 'Musicalização' },
  { ...photos.festivalCertificados, tag: 'Festival' },
  { ...photos.alunaGuitarra, tag: 'Aulas' },
  { ...photos.comunidade, tag: 'Comunidade' },
  { ...photos.tecidoAzul, tag: 'Musicalização' },
  { ...photos.eventoTambor, tag: 'Eventos' },
  { ...photos.festivalPalco, tag: 'Festival' },
  { ...photos.alunoGuitarra, tag: 'Aulas' },
  { ...photos.equipe, tag: 'Equipe' },
  { ...photos.eventoBolhas, tag: 'Eventos' },
  { ...photos.criancaSala, tag: 'Musicalização' },
  { ...photos.aniversario, tag: 'Eventos' },
]
