🎬 SENAI Streams

Aplicação web inspirada em plataformas de streaming, construída em Angular, com design moderno, rotas, listagem de filmes e séries, filtros e página de detalhes.

📌 Sobre o Projeto

O SENAI Streams é um projeto front-end desenvolvido para estudo e prática de Angular.
Ele simula uma plataforma de streaming, exibindo:

Destaques da semana

Lista de conteúdos (filmes e séries)

Filtro por categorias

Página de detalhes do conteúdo

Listagem de avaliações

Componentes reutilizáveis

Navegação completa via Angular Router

🚀 Tecnologias Utilizadas

Angular 17+

TypeScript

SCSS

HTML5

RxJS

Angular Router

API Fake interna / dados mockados

Git & GitHub

📂 Estrutura do Projeto
src/
 ├── app/
 │   ├── components/
 │   │   ├── avaliacoes/
 │   │   ├── detalhes-content/
 │   │   ├── lista-categorias/
 │   │   └── lista-contents/
 │   ├── models/
 │   ├── services/
 │   ├── app.html
 │   ├── app.ts
 │   ├── app.routes.ts
 │   └── app.scss
 ├── assets/
 ├── index.html
 ├── main.ts
 └── styles.scss

🧭 Funcionalidades
✔️ 1. Tela Inicial (Home)

Banner principal com destaque

Botão “Assistir” e “Mais informações”

Seção Em Alta listando conteúdos

✔️ 2. Listagem de Filmes e Séries

Cards responsivos

Imagem, título, ano e nota

Filtro automático baseado no tipo

✔️ 3. Página de Detalhes

Banner interno

Informações detalhadas

Direção, duração, descrição etc.

✔️ 4. Menu de Navegação

Início

Filmes

Séries

Estado ativo destacado

✔️ 5. Componentização total

Cada parte da interface é um componente Angular separado.

▶️ Como Rodar o Projeto
1. Clone o repositório
git clone https://github.com/sinara-santinoni/senai-streams.git

2. Acesse a pasta
cd senai-streams

3. Instale as dependências
npm install

4. Rode o servidor
ng serve


A aplicação ficará disponível em:

👉 http://localhost:4200/

🖥️ Demonstração (Screenshots)

(adicione as imagens depois no GitHub, se quiser posso gerar a seção com imagens também)

📦 Build para Produção
ng build


Os arquivos finais ficarão em:

dist/senai-streams/

👩‍💻 Desenvolvido por

Sinara Santinoni (Duda)
📌 Front-End Developer
📧 sinarassantinoni@gmail.com

🔗 GitHub: https://github.com/sinara-santinoni
