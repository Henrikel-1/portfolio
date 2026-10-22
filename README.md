# Portfólio · Keldson Henriques

Portfólio pessoal de desenvolvedor de software, com foco em Java, Spring Boot e React.

**Site:** https://portfolio-nortys.vercel.app/

## Seções

- **Início:** apresentação, tecnologias principais e links de contato.
- **Sobre:** resumo da formação, localização e objetivo.
- **Experiência:** formação no IFPB e monitoria de SQL e banco de dados.
- **Projetos:** Library API (API REST com Spring Boot e JWT) e SISMON (sistema desktop em equipe).
- **Habilidades:** tecnologias organizadas por área, com destaque para as que estão em aprendizado.
- **Contato:** e-mail com botão de copiar, links de GitHub e LinkedIn e formulário de contato.

## Tecnologias

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- CSS Modules, com variáveis globais em `src/styles/variables.css`
- [ESLint](https://eslint.org/) com regras para TypeScript e React

## Como rodar localmente

Pré-requisito: Node.js e npm instalados.

```bash
npm install
npm run dev
```

O terminal mostra o endereço local, geralmente `http://localhost:5173`.

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Verifica os tipos com TypeScript e gera a versão de produção em `dist/` |
| `npm run preview` | Sobe um servidor local para testar o `dist/` gerado |
| `npm run lint` | Roda o ESLint no projeto |

## Formulário de contato

O formulário envia as mensagens para o endereço definido na variável `VITE_CONTACT_ENDPOINT`. Ela é lida no momento do build.

1. Copie o arquivo de exemplo:

   ```bash
   cp .env.example .env.local
   ```

2. Preencha `VITE_CONTACT_ENDPOINT` com a URL do serviço que recebe os dados (por exemplo, um formulário do [Formspree](https://formspree.io/)).

Sem essa variável, o formulário valida os campos, mas mostra o aviso de que o envio não está configurado. A mensagem de sucesso só aparece depois que o serviço confirma o recebimento.

O arquivo `.env.local` não vai para o Git. Na hospedagem, a mesma variável deve ser cadastrada nas configurações do projeto, e depois é preciso fazer um novo deploy.

## Onde editar o conteúdo

O conteúdo fica separado da interface, na pasta `src/data/`:

- `profile.ts`: nome, cargo, texto de apresentação, e-mail, GitHub e LinkedIn.
- `about.ts`: texto e dados da seção Sobre.
- `experience.ts`: formação e experiências.
- `projects.ts`: projetos exibidos na seção Projetos.
- `skills.ts`: habilidades por categoria.
- `navLinks.ts`: itens do menu.

Os componentes ficam em `src/components/`, um diretório por seção, com seu próprio arquivo de estilo `.module.css`.

## Deploy

O site é publicado na [Vercel](https://vercel.com/). O projeto usa o preset de Vite, com o comando de build `npm run build` e a pasta de saída `dist`. Cada atualização na branch `main` gera um novo deploy automaticamente.

## Estrutura

```text
public/              arquivos estáticos (favicon)
src/
  components/        seções e componentes da interface
  data/              conteúdo do portfólio
  hooks/             hooks React reutilizáveis
  styles/            variáveis, reset e estilos globais
  App.tsx            composição das seções
  main.tsx           ponto de entrada
index.html           metadados e fontes
```
