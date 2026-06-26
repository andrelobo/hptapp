# CURRENT STATE

## Status

- Frontend PWA base do MVP `Libras no Comércio` implementado neste repositório.
- Landing inicial, tela de boas-vindas, login mock e rotas principais do aluno já estruturadas.
- Modo demo com alternância rápida entre perfis `aluno` e `empresa` implementado no frontend.
- Fluxo mock agora inclui logout e limpeza da sessão demo.
- Build de produção validado com `yarn build`.
- `yarn.lock` gerado e dependências instaladas com Yarn.
- `vercel.json` adicionado para deploy via GitHub na Vercel.
- Ainda sem backend conectado.
- Ainda sem autenticação real.
- Ainda sem upload persistente ou emissão real de certificados.
- Roteamento e assets preparados para deploy do frontend em `/app`.

## O que o frontend deve cobrir agora

- Tela de boas-vindas
- Login e cadastro mock
- Dashboard do aluno
- Catálogo e detalhe de cursos
- Aula com conclusão local
- Certificado digital em modo demonstração
- Banco de talentos
- Comunidade
- Perfil
- Manifesto PWA e suporte offline para shell estático
- Assets locais de marca e material PDF vinculados ao frontend
- Rewrites de hospedagem para servir o app em `/app`
- Dashboard, talentos, comunidade e perfil adaptados para visão de empresa
- Landing, boas-vindas e certificados refinados para demo comercial mais forte

## Riscos conhecidos

- O domínio final ainda precisará apontar corretamente para o projeto da Vercel.
- Se o domínio principal já estiver em outro projeto, o subpath `/app` dependerá de roteamento no projeto que controla `hebertonpinheiro.com`.
- Recursos dependentes do backend continuarão em modo mock até a separação entre os dois repositórios ser conectada.
- As duas personas ainda compartilham a mesma base de rotas e dados mockados; a separação real dependerá do backend futuro.
