# Syntax Wear — guia do projeto

## Roteamento (TanStack Router)

Config em [vite.config.ts](vite.config.ts):
- `routesDirectory: "./src/pages"` → toda rota vive dentro de `src/pages`.
- `routeToken: "layout"` → arquivo de **layout** compartilhado se chama `layout.tsx` (não `route.tsx`, que é o padrão da lib).
- `generatedRouteTree: "./src/router-tree-gen.ts"` → gerado automaticamente, **nunca editar na mão**.

### Estrutura atual

```
src/pages/
├── __root.tsx        raiz absoluta (topo de tudo, só tem <Outlet/>)
└── _app/
    ├── layout.tsx     layout compartilhado (Header + <Outlet/> + Footer)
    └── index.tsx      conteúdo da rota "/" (Hero, Categories, Galery)
```

`_app` com underscore = rota **pathless** (agrupa páginas sob o mesmo `layout.tsx` sem entrar na URL).

### Passo a passo pra criar uma rota nova

1. Decidir o caminho do arquivo (= a URL):
   | Quero a URL... | Crio o arquivo... |
   |---|---|
   | `/sobre` | `src/pages/_app/sobre.tsx` |
   | `/produtos` (lista) | `src/pages/_app/produtos/index.tsx` |
   | `/produtos/:id` (dinâmica) | `src/pages/_app/produtos.$id.tsx` |
   | Seção nova com layout próprio | pasta nova + `layout.tsx` dentro |

   Se a página deve ter Header/Footer, coloca dentro de `_app/`. Se não deve (ex: login), cria fora.

2. Esqueleto padrão do arquivo:
   ```tsx
   import { createFileRoute } from '@tanstack/react-router'

   export const Route = createFileRoute('/_app/sobre')({
     component: RouteComponent,
   })

   function RouteComponent() {
     return <div>Conteúdo da página</div>
   }
   ```
   O argumento de `createFileRoute(...)` tem que bater com o caminho do arquivo.

3. Deixar `npm run dev` rodando — sem isso o `router-tree-gen.ts` não é regerado sozinho.

4. Conferir se a rota nova apareceu no `router-tree-gen.ts` (gerado automaticamente).

5. Navegar até ela com `<Link to="/sobre">`, nunca com `<a href>` — assim a rota é validada pelo TypeScript e a navegação não recarrega a página.

### `App.tsx`

Só monta o `router` e renderiza `<RouterProvider router={router} />`. Não deve ter mais JSX de página nem imports de componentes de UI — isso tudo vive em `src/pages`.
