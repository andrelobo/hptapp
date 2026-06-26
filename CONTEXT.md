# CONTEXT

## Produto

- Nome atual do MVP: `Libras no Comércio`
- Marca exibida: `Heberton Pinheiro Treinamentos`
- Objetivo: entregar um frontend PWA mobile-first para apresentação comercial e validação inicial do produto.
- O MVP atual precisa servir bem tanto para demonstração comercial quanto para navegação prática em celular.

## Escopo deste repositório

- Este repositório contém somente o frontend do app.
- Backend, autenticação real, upload persistente, certificados reais em PDF e validação de QR Code ficarão em repositório separado.
- Nesta fase, o frontend usa dados mockados e interações locais para demonstrar a jornada do aluno e da empresa.
- As duas personas demo ativas neste frontend são `aluno` e `empresa`.

## Stack adotada

- Vite
- React
- TailwindCSS
- React Router
- `vite-plugin-pwa`

## Rotas de MVP

- Base pública de deploy: `/app`
- `/app/`
- `/app/apresentacao`
- `/app/login`
- `/app/dashboard`
- `/app/cursos`
- `/app/cursos/:id`
- `/app/aula/:id`
- `/app/certificados`
- `/app/talentos`
- `/app/comunidade`
- `/app/perfil`

## Diretrizes

- Manter layout mobile-first.
- Assumir deploy principal deste frontend em subpath `/app`.
- Preservar linguagem visual inspirada na apresentação enviada pelo usuário.
- Manter a direção visual atual com fundo azul mais forte para avaliação comercial e percepção de investidores.
- Preferir interações demonstráveis no frontend sem prometer integrações ainda inexistentes.
- Preservar o fluxo demo com sessão local, troca rápida de perfil e proteção de rotas internas apenas no frontend.
- Não misturar responsabilidades de backend neste repo.
