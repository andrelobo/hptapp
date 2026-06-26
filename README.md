# Libras no Comércio App

Frontend PWA mobile-first do MVP da Heberton Pinheiro Treinamentos.

O app agora suporta demonstracao rapida em dois perfis:

- `aluno`
- `empresa`

As telas de entrada, trilhas e certificados tambem foram preparadas para apresentacao comercial do MVP.

## Stack

- Vite
- React
- TailwindCSS
- React Router
- vite-plugin-pwa

## Scripts

```bash
yarn install
yarn dev
yarn build
yarn preview
```

No ambiente local, abra a aplicação em `http://localhost:5173/app/`.

## Deploy na Vercel via GitHub

1. Suba este repositório para o GitHub.
2. No painel da Vercel, importe o repositório pelo fluxo `Add New... > Project`.
3. Deixe a Vercel usar o arquivo `vercel.json` deste repo.
4. Conecte o domínio desejado e aponte o acesso público para `https://seu-dominio.com/app`.

O arquivo [vercel.json](/home/lobo/Área%20de%20trabalho/KODE/app_hpt/vercel.json:1) já fixa:

- `buildCommand`: `yarn build`
- `outputDirectory`: `dist`
- rewrites para servir a SPA e os assets corretamente em `/app`

Se `hebertonpinheiro.com` já estiver em outro projeto da Vercel, o caminho `/app` precisará ser roteado pelo projeto que hoje controla esse domínio, ou então ambos precisam ficar sob a mesma estratégia de deploy.

## Rotas principais

- Base pública: `/app`
- `/app/`
- `/app/apresentacao`
- `/app/login`
- `/app/dashboard`
- `/app/cursos`
- `/app/certificados`
- `/app/talentos`
- `/app/comunidade`
- `/app/perfil`

## Observações

- Este repo é somente frontend.
- O build está configurado para deploy em subpath `/app`.
- A configuração da Vercel também já está preparada para GitHub deploy em `/app`.
- A troca de perfil demo fica disponível no shell do app para apresentações rápidas.
- Integrações de backend serão adicionadas depois, em outro repositório.
- Os assets de marca e material-base vêm do diretório local informado pelo usuário.
