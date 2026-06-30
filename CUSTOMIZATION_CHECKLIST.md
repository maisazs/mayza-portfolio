# Checklist de personalização

## 1. Fotos da Mayza

Os espaços estão vazios de propósito.

- Hero: `components/sections/Hero.tsx`
- Sobre — foto 02: `components/sections/About.tsx`
- Sobre — foto 03: `components/sections/About.tsx`

Passos:

1. Adicione as imagens em `public/images/`.
2. Importe `Image` de `next/image`.
3. Troque cada `<PhotoPlaceholder />` por um `<Image />`.
4. Use `fill`, `sizes` e `object-fit: cover` para preservar o enquadramento.

## 2. Dados pessoais

Edite `config/site.ts`:

- telefone
- WhatsApp
- LinkedIn
- GitHub
- currículo

## 3. Currículo

Adicione o PDF em `public/cv/` e atualize `cvUrl` em `config/site.ts`.

## 4. Projetos

- Conteúdo: `data/projects.ts`
- Capas: `public/projects/`
- Renderização: `components/sections/Projects.tsx`

Todos os projetos atuais estão sinalizados como conteúdo de demonstração.

## 5. Formulário

O formulário abre o cliente de e-mail como fallback. Para receber mensagens diretamente, integre Formspree, Resend ou uma API Route.
