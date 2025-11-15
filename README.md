# 🎬 SENAI Streams

O **SENAI Streams** é uma aplicação web inspirada em plataformas de streaming, construída em **Angular**, com design moderno, rotas organizadas, listagem dinâmica de filmes e séries, filtros por categorias e página de detalhes.

---

## 📌 Sobre o Projeto

Este projeto foi desenvolvido para fins educacionais, praticando:

- Estruturação de um projeto Angular
- Componentização
- Organização de rotas
- Consumo de dados mockados
- Criação de interface moderna usando SCSS
- Boas práticas de reuso de componentes

O resultado é uma plataforma visualmente agradável e funcional, simulando uma experiência real de streaming.

---

## 🚀 Tecnologias Utilizadas

- Angular 17+
- TypeScript
- HTML5
- SCSS
- Angular Router
- RxJS
- Git & GitHub

---

## 📂 Estrutura do Projeto

src/
├── app/
│ ├── components/
│ │ ├── avaliacoes/
│ │ ├── detalhes-content/
│ │ ├── lista-categorias/
│ │ └── lista-contents/
│ ├── models/
│ ├── services/
│ ├── app.html
│ ├── app.ts
│ ├── app.routes.ts
│ └── app.scss
├── assets/
├── index.html
├── main.ts
└── styles.scss




---

## 🧭 Funcionalidades

### ✔️ Tela Inicial
- Banner principal com destaque
- Botões de ação ("Assistir" e "Mais Informações")
- Seção "Em Alta" com conteúdos carregados dinamicamente

### ✔️ Lista de Filmes e Séries
- Cards responsivos
- Título, ano, nota e imagem
- Filtro automático baseado no tipo selecionado (Filmes / Séries)

### ✔️ Página de Detalhes
- Banner específico
- Sinopse
- Gênero, ano, duração
- Informações do diretor

### ✔️ Menu de Navegação
- Destaque no item ativo
- Rotas para: Início, Filmes, Séries

### ✔️ Componentização
- Cada parte da interface possui seu próprio componente Angular
- Fácil manutenção e evolução do projeto

---

## ▶️ Como Rodar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/sinara-santinoni/senai-streams.git
