# Conferência dos arquivos enviados

## Mantido sem alteração estrutural

- `app/page.tsx`
- ordem das seções da home
- composição dos quatro cards da home
- proporção das capas em `1920 / 1077`
- transição Skills → Projects
- transição Projects → Process
- estilos e animações já existentes no `globals.css`

## Divergências corrigidas

1. Os links `#sobre`, `#skills` e semelhantes não funcionariam corretamente quando o usuário estivesse em `/projetos/`.
   - Agora usam `withBasePath("/#secao")`.

2. O item Projetos do menu apontava apenas para `#projetos`.
   - Agora aponta para a página interna `/projetos/`.

3. A home renderizava o array completo.
   - Agora usa `homeProjects`, mantendo somente os quatro primeiros na composição atual.

4. O card estava duplicado dentro da seção.
   - Agora existe um componente compartilhado `ProjectCard`.

5. Links externos com `target="_blank"` não tinham `rel`.
   - Foi adicionado `rel="noopener noreferrer"`.

6. `category` era enviado para `ProjectVisual`, mas não era usado.
   - A propriedade desnecessária foi removida.

7. Havia caminhos absolutos de textura incompatíveis com GitHub Pages.
   - Foram substituídos pelas variáveis já definidas no layout.

8. O README ainda descrevia o formulário como `mailto:`.
   - Foi atualizado para o Formspree já configurado.

## Compatibilidade preservada

O campo `githubUrl` continua com o valor atual do Instagram para não quebrar componentes existentes que ainda usam esse nome para o link do Instagram.
