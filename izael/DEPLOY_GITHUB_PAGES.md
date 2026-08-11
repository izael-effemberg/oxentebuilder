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

O workflow instala dependências dentro de `izael/`, roda o build com `NEXT_PUBLIC_BASE_PATH=/izael` e publica:

- o site atual da Oxente na raiz
- a página pessoal do Izael em `/izael/`

## URL com subpasta

Este repositório já tem o site da Oxente na raiz. A página do Izael deve ser acessada em:

```text
https://www.oxentebuilder.com/izael/
```

ou, sem domínio customizado:

```text
https://izael-effemberg.github.io/oxentebuilder/izael/
```

## Domínio customizado ou página raiz

Se um dia este app virar o site inteiro, sem subpasta, como:

```text
https://izael-effemberg.com/
```

ou:

```text
https://izael-effemberg.github.io/
```

troque no workflow `NEXT_PUBLIC_BASE_PATH: /izael` por:

```text
NEXT_PUBLIC_BASE_PATH: none
```

## Build local

```bash
npm install
npm run build
```

## Testar build local simulando GitHub Pages em subpasta

Para simular a URL `/izael/`:

```bash
NEXT_PUBLIC_BASE_PATH=/izael npm run build
```
