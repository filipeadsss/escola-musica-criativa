# Escola Música Criativa – protótipo do site

Site institucional de página única (com página separada de política de privacidade), feito em React + Vite.
Protótipo para apresentação comercial aos proprietários da escola.

## Como rodar

Requisitos: Node.js 18 ou superior.

```bash
npm install
npm run dev       # ambiente de desenvolvimento em http://localhost:5173
npm run build     # gera a versão final em dist/
npm run preview   # serve a pasta dist/ em http://localhost:4173
```

A pasta `dist/` precisa ser servida por um servidor web (Netlify, Vercel, Hostinger etc.).
Abrir o `index.html` direto no navegador não funciona, porque os caminhos são absolutos.

## Estrutura

```
index.html                 SEO, Open Graph e dados estruturados
privacidade.html           Entrada da página de política de privacidade
public/img/                Fotos reais otimizadas em WebP (640px e 1280px)
src/data/site.js           TODO o conteúdo comercial: contato, endereço, modalidades, mensagens de WhatsApp, fotos e textos alternativos
src/lib/whatsapp.js        Gera links wa.me com mensagem codificada
src/components/            Uma seção por arquivo (Hero, About, Musicalizacao, Aulas, Festival, Eventos, Equipe, Galeria, Contato, Footer)
src/components/ui.jsx      Componentes reutilizáveis (imagem responsiva, botão de WhatsApp, cabeçalho de seção)
src/styles/global.css      Tokens de cor/tipografia e estilos (mobile-first)
src/privacy.jsx            Página de política de privacidade
```

Para mudar telefone, endereço, modalidades ou mensagens, edite apenas `src/data/site.js`.

## Funcionalidades

- Navegação por seções com indicação da seção ativa; menu móvel com fechamento por Esc e por clique.
- 16 botões de WhatsApp com mensagens contextualizadas (aulas, cada modalidade, musicalização, festival, eventos).
- Botão flutuante de WhatsApp que aparece depois da primeira dobra.
- Galeria em mosaico com 8 fotos iniciais, botão para ver todas (12) e visualização ampliada com teclado (setas e Esc).
- Mapa do Google carregado só quando o visitante clica (não envia dados ao Google sem ação dele) + link para o Google Maps.
- Acessibilidade: link "pular para o conteúdo", foco visível, textos alternativos, um único h1, respeito a "reduzir movimento".
- Fontes hospedadas no próprio site (sem chamadas ao Google Fonts) e nenhum rastreamento.
- Não há formulário: não existe backend para processar dados, então o contato é todo pelo WhatsApp.

## O que precisa ser confirmado com a escola antes de publicar

Informações tiradas dos materiais de referência (perfil do Instagram, ficha do Google e posts):

1. **Telefone/WhatsApp** (31) 97305-4977 e se é o número certo para receber os contatos do site.
2. **Modalidades**: o site lista musicalização infantil, canto, guitarra, bateria, violino e ukulele, todas vistas em
   posts oficiais "Aulas de...". Confirmar a lista atual e se há outras (violão, teclado, contrabaixo e acordeão aparecem
   em fotos, mas não foram incluídos por falta de confirmação).
3. **Endereço e referências** ("Atrás da Caixa e próximo à Matriz São Gonçalo").
4. **Site atual** musicacriativa.com.br: se este protótipo vai substituí-lo, o link "Site" na seção de contato deve sair.
5. **Edição do festival dedicada à musicalização infantil** (vista no post "Festival Musicalização Infantil 2026").
6. **Eventos**: se o serviço atende aniversários e quais outros eventos. Há também um post de "aluguel de som para
   pequenos eventos" que não foi incluído no site.
7. **Fotos**: autorização de uso de imagem para publicação definitiva, principalmente das fotos com crianças.
   A autorização atual vale para o protótipo.
8. **Logotipo**: o site usa uma marca tipográfica provisória. Pedir o arquivo original (SVG ou PNG em alta resolução).
9. **Horários de funcionamento**: não foram publicados porque não estavam confirmados.
10. **Avaliações do Google** (5,0 com 164 avaliações no print de referência): não usadas. Se a escola quiser, dá para
    incluir uma chamada "Veja as avaliações no Google" com link para a ficha, sem copiar notas para o site.
11. **Política de privacidade**: texto inicial coerente com o que o site faz hoje; idealmente revisar com assessoria jurídica.

## Para publicar de verdade

1. Confirmar os itens acima e atualizar `src/data/site.js`.
2. Trocar a marca provisória pelo logotipo oficial (`src/components/Logo.jsx`).
3. Pedir fotos em resolução maior: as atuais têm cerca de 900px, o suficiente para o protótipo, mas abaixo do ideal
   para telas grandes.
4. Ajustar o domínio definitivo nas tags `canonical`, `og:url`, `og:image` e no JSON-LD do `index.html`.
5. Colocar o projeto num repositório Git e conectar a uma hospedagem estática (Netlify, Vercel ou Cloudflare Pages
   fazem o deploy automático a cada commit).
6. Apontar o domínio (DNS) para a hospedagem e ativar HTTPS.
7. Cadastrar o site no Google Search Console e vincular o site à ficha da escola no Google.
8. Opcional: instalar uma ferramenta de métricas que respeite a privacidade (como Plausible) e atualizar a política
   de privacidade se fizer isso.
