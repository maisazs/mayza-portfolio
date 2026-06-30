# Portfólio — Mayza Ester

Portfólio autoral desenvolvido com Next.js, TypeScript, Tailwind CSS 4 e GSAP.

## Rodar o projeto

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Onde personalizar

### Dados pessoais
Edite `config/site.ts`:

- telefone
- WhatsApp
- LinkedIn
- GitHub
- caminho do currículo

### Fotos da Mayza
Os espaços estão intencionalmente vazios e identificados na interface.

1. Adicione as fotos em `public/images/`.
2. Substitua os componentes `PhotoPlaceholder` em:
   - `components/sections/Hero.tsx`
   - `components/sections/About.tsx`
3. Use `next/image` para manter otimização e evitar layout shift.

### Projetos
Edite `data/projects.ts` e substitua todos os dados de demonstração.
As capas podem ser armazenadas em `public/projects/`.

### Linha do tempo e skills
- `data/timeline.ts`
- `data/skills.ts`

### Formulário
O formulário usa `mailto:` apenas como fallback funcional sem backend. Para produção, conecte-o ao Formspree, Resend, API Route ou serviço equivalente.

## Identidade visual

A interface utiliza os elementos fornecidos como referência:

- paleta rosa, papel, cinza e preto;
- textura de papel;
- padrão numérico;
- starburst e sparkles;
- composição editorial e assimétrica.

## Build

```bash
npm run build
npm start
```

## Fontes

O projeto usa stacks de fontes do sistema para funcionar sem downloads externos no build. Caso deseje, substitua as variáveis `--font-editorial`, `--font-sans` e `--font-mono` em `app/globals.css` por fontes próprias ou por `next/font`.
