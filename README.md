# Equipe Sinapse · ConectaMente

Landing page institucional da **Equipe Sinapse** e do **ConectaMente**, um jogo sério que ajuda pessoas com Síndrome de Down a desenvolver autonomia nas tarefas do cotidiano, como rotina e cuidados pessoais, por meio de gamificação, desafios e progressão por níveis.

## Equipe

| Integrante | Função |
|---|---|
| Ricardo | Desenvolvedor Back-end |
| João Pedro | Desenvolvedor Front-end |
| Lorenzo | Desenvolvedor de Banco de Dados |
| Camile | Pesquisa, Documentação e Experiência do Usuário |

## Seções da página

1. **Início**: apresentação da equipe e botões de navegação.
2. **Sobre nós**: quem somos e como trabalhamos.
3. **Nossa equipe**: cartões com foto, função e competências de cada integrante.
4. **ConectaMente**: proposta, vídeo do pitch, problema, público-alvo, objetivo, funcionalidades e impacto social, com o botão **Acessar o jogo** no final.

## Tecnologias

- HTML5, CSS3 e JavaScript puro (sem frameworks e sem build)
- Fontes Poppins e Nunito (Google Fonts)
- Layout responsivo para celular, tablet e computador

## Estrutura

```
landing-page/
├── index.html          # Estrutura e conteúdo
├── style.css           # Estilos (cores da identidade Sinapse)
├── script.js           # Menu mobile, animações e carregamento de fotos
└── assets/
    ├── logo-sinapse.png
    ├── pitch.mp4        # Vídeo do pitch
    ├── fotos/           # Fotos da equipe (640×640)
    └── telas/           # Telas do jogo
```

## Como rodar localmente

Opção simples: dê dois cliques no `index.html`.

Opção com servidor local (recomendada):

```bash
cd landing-page
python -m http.server 5510
```

Depois acesse http://localhost:5510

## Link do jogo

O botão **Acessar o jogo** abre o ConectaMente já publicado na internet:

👉 **https://frontend-five-psi-1bpa6grdgm.vercel.app/**

### Como o jogo está hospedado

| Parte | Plataforma |
|---|---|
| Front-end (interface do jogo) | Vercel |
| Back-end (API) | Render |

Esta landing page é só a vitrine do projeto. O jogo em si é uma aplicação separada, com front-end e back-end hospedados de forma independente.

### ⚠️ Aviso: o jogo pode demorar ou travar

O ConectaMente é uma aplicação **pesada**, com muitos elementos visuais e interativos, e a hospedagem que usamos tem recursos limitados. Por isso, ao acessar o jogo, **pode haver lentidão e até travamentos**. Isso é uma limitação de desempenho da hospedagem, e não um erro de funcionamento do jogo.

O que pode acontecer:

- **Primeiro acesso lento:** o back-end na Render pode levar alguns instantes para responder quando ficou um tempo sem uso. Aguarde o carregamento antes de clicar de novo.
- **Travamentos durante o jogo:** por causa do peso da aplicação, a tela pode congelar por alguns segundos.

Dicas para uma melhor experiência:

1. Aguarde a tela carregar por completo antes de interagir.
2. Se travar, **recarregue a página** (F5) e espere de novo.
3. Prefira o **computador** e um navegador atualizado (Chrome, Edge ou Firefox).
4. Feche outras abas e programas pesados e use uma conexão de internet estável.

Mesmo com essa limitação, o jogo está publicado e funcional para quem quiser conhecer e testar o ConectaMente.

## Paleta de cores

| Cor | Hex |
|---|---|
| Azul escuro | `#0a1f6e` |
| Azul médio | `#1648c8` |
| Azul claro | `#2e7cf6` |
| Ciano | `#33e0ff` |
| Amarelo | `#ffc107` |
| Fundo | `#f5f7ff` |

---

Desenvolvido pela **Equipe Sinapse**.
