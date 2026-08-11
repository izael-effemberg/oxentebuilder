# Deploy no GitHub Pages

Este projeto usa `output: "export"` no Next.js, então o build gera arquivos estáticos na pasta `out/`.

## Como este projeto foi preparado

O app está configurado para GitHub Pages:

- `output: "export"` gera arquivos estáticos em `out/`
- `images.unoptimized: true` evita depender do servidor de imagens do Next
- `public/.nojekyll` permite servir a pasta `_next/`
- o workflow correto fica na raiz do repositório: `.github/workflows/deploy-izael.yml`

## Deploy automático

No GitHub:

1. Abra Settings -> Pages
2. Em Build and deployment, selecione Source: GitHub Actions
3. Faça push na branch `main`

O workflow instala dependências dentro de `izael/`, roda o build e publica `izael/out`.

## URL com subpasta

Para GitHub Pages de repositório, como:

```text
https://izael-effemberg.github.io/oxentebuilder/
```

o projeto infere automaticamente o `basePath` como `/oxentebuilder` durante o GitHub Actions.

## Domínio customizado ou página raiz

Se publicar sem subpasta, como:

```text
https://izael-effemberg.com/
```

ou:

```text
https://izael-effemberg.github.io/
```

adicione esta variável em Settings -> Secrets and variables -> Actions -> Variables:

```text
NEXT_PUBLIC_BASE_PATH=none
```

## Build local

```bash
npm install
npm run build
```

## Testar build local simulando GitHub Pages em subpasta

Exemplo para um repositório chamado `oxentebuilder`:

```bash
GITHUB_ACTIONS=true GITHUB_REPOSITORY=izael-effemberg/oxentebuilder npm run build
```
