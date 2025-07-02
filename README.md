# Agify Estimator 🔮

Aplicação em [SvelteKit](https://kit.svelte.dev/) que estima a idade de uma pessoa com base no seu primeiro nome, utilizando a [API pública do agify.io](https://agify.io/).

## ✨ Funcionalidades

- Input de texto para digitar um nome.
- Requisição automática com debounce (sem botão).
- Exibição da idade estimada e número de registros.
- Atualização da URL com query string (`?name=Lucas`) para compartilhamento direto.
- Estilização com CSS puro.
- Uso da função `load()` do SvelteKit para buscar dados.

## 🧪 Tecnologias

- [SvelteKit](https://kit.svelte.dev/)
- Svelte 4 ou 5
- TypeScript
- HTML5 + CSS puro

## 🖼️ Preview

![preview](./static/screenshot-01.png) 

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/JuanGabriel-SA/svelte-agify.git
cd svelte-agify

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev

# Acesse em http://localhost:5173
