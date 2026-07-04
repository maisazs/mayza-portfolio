# Portfólio — Mayza Ester

Portfólio autoral desenvolvido com Next.js, TypeScript, Tailwind CSS 4 e GSAP.

## Rodar o projeto

```bash
npm install
npm run dev
```

Abra:

```text
http://localhost:3000
```

A página completa de projetos fica em:

```text
http://localhost:3000/projetos
```

## Estrutura de projetos

Os dados ficam em:

```text
data/projects.ts
```

O array `projects` alimenta a página interna com todos os projetos.

A home usa:

```ts
export const homeProjects =
  projects.slice(0, 4);
```

Assim, ela mantém a composição atual com quatro projetos, mesmo quando novos itens forem adicionados.

## Adicionar um novo projeto

1. Coloque a capa em `public/images/`.
2. Adicione um novo objeto no array `projects`.
3. Use `withBasePath` no caminho da imagem.

Exemplo:

```ts
{
  slug: "novo-projeto",
  name: "Novo projeto",
  category: "Site Institucional",
  description: "Descrição do projeto.",
  technologies: ["Next.js", "TypeScript"],
  challenge: "Desafio do projeto.",
  solution: "Solução desenvolvida.",
  link: "https://exemplo.com",
  tone: "paper",
  image: withBasePath(
    "/images/novo-projeto.png",
  ),
}
```

## Links e navegação

Os links principais ficam em:

```text
config/site.ts
```

O menu usa caminhos com `withBasePath`, por isso funciona tanto localmente quanto no GitHub Pages.

O item **Projetos** abre:

```text
/projetos/
```

Os demais itens retornam para as respectivas seções da home.

## Formulário

O formulário está conectado ao Formspree pelo campo:

```ts
formEndpoint:
  "https://formspree.io/f/xojoydjd"
```

## Build e deploy

```bash
npm run build
npm run deploy
```

A rota publicada dos projetos será:

```text
https://maisazs.github.io/mayza-portfolio/projetos/
```

## Observação sobre texturas

O CSS utiliza as variáveis:

```css
var(--paper-texture)
var(--numeric-texture)
```

Isso evita que os caminhos das texturas quebrem no GitHub Pages.

# Loader global

Substitua os quatro arquivos nos caminhos correspondentes:

- `components/ui/PageLoader.tsx`
- `app/layout.tsx`
- `app/page.tsx`
- `app/projetos/page.tsx`

## Comportamento

- Aparece no primeiro carregamento da aba.
- Aparece novamente quando a página é recarregada.
- Funciona quando o acesso inicial acontece na home.
- Funciona quando o acesso inicial acontece diretamente em `/projetos/`.
- Não reaparece durante a navegação interna entre as duas páginas.

Isso acontece porque o loader foi movido para o `RootLayout`, que permanece montado durante as navegações do App Router.

# Projetos completos

## Arquivos

Substitua:

- `data/projects.ts`
- `components/projects/ProjectCard.tsx`

Adicione o conteúdo de:

- `app/globals-project-placeholder.css`

ao final do seu `app/globals.css`.

## Home

Os quatro projetos atuais estão com:

```ts
showOnHome: true
```

Os demais estão com:

```ts
showOnHome: false
```

A seleção da home é feita com:

```ts
export const homeProjects =
  projects.filter(
    (project) => project.showOnHome,
  );
```

## Imagens

Os novos projetos estão sem a propriedade `image`.

Enquanto as capas não forem adicionadas, o card exibe um placeholder visual.

Depois, basta incluir em cada projeto:

```ts
image: withBasePath(
  "/images/nome-da-capa.png",
),
```
