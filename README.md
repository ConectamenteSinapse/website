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

O botão **Acessar o jogo** aponta hoje para `http://localhost:3000`, que é o endereço do **servidor local** onde o ConectaMente roda durante o desenvolvimento.

**Por que usamos esse link?** Não faria sentido a página apresentar o jogo e não ter um lugar para acessá-lo. Como o ConectaMente ainda não está publicado na internet, colocamos o endereço do servidor local para o botão não ficar sem destino, como um elemento só decorativo.

**O que isso significa na prática:** por enquanto, o botão só funciona no computador onde o jogo estiver rodando (`localhost:3000`). Em outros computadores, ele não abre o jogo.

**Próximo passo:** quando o jogo for publicado e tiver um endereço na internet, vamos trocar esse link para que qualquer pessoa consiga jogar. Para isso, basta abrir o `index.html`, procurar `id="link-jogo"` e substituir o `href` pelo novo endereço.

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
