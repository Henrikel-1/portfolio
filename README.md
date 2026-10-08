# Portfólio — Keldson Henriques

Portfólio pessoal desenvolvido para apresentar minha trajetória como estudante de Desenvolvimento de Software, minhas principais habilidades, experiências e projetos.

O projeto foi construído com foco em **organização de código, componentização, responsividade, acessibilidade e uma interface moderna e objetiva**.

## 🚀 Tecnologias

* **React**
* **TypeScript**
* **Vite**
* **CSS3**
* **Git**
* **GitHub**

O projeto utiliza CSS puro, com variáveis, CSS Modules e recursos nativos do navegador, evitando dependências desnecessárias.

## ✨ Funcionalidades

* Página única com navegação por seções
* Seção inicial com apresentação profissional
* Sobre mim
* Experiência
* Projetos
* Habilidades técnicas
* Contato
* Navegação responsiva para dispositivos móveis
* Menu adaptado para telas menores
* Animações suaves durante a navegação
* Animação de entrada dos elementos do Hero
* Suporte a `prefers-reduced-motion`
* Estrutura preparada para acessibilidade
* Layout adaptado para diferentes tamanhos de tela

## 🧩 Estrutura do projeto

```text
portfolio/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   └── Reveal/
│   ├── data/
│   ├── hooks/
│   │   └── useInView.ts
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
└── package.json
```

A aplicação é organizada em componentes independentes. Os dados de projetos, habilidades e demais informações são mantidos separados da interface sempre que possível, facilitando futuras alterações e manutenção.

## 🎨 Identidade visual

A interface utiliza uma paleta escura e discreta, com azul como cor de destaque.

* Fundo: `#0B0D12`
* Superfícies: `#12151C`
* Bordas: `#232836`
* Texto principal: `#E8EAF0`
* Texto secundário: `#9AA3B5`
* Destaque: `#3B82F6`

A proposta é manter uma aparência profissional e tecnológica sem utilizar excesso de gradientes, neon ou elementos decorativos que prejudiquem a leitura.

## 🎬 Animações

As animações das seções utilizam a API nativa **Intersection Observer**.

Quando uma seção entra na área visível da página, o React altera seu estado e o CSS realiza a transição de opacidade e posição.

Essa abordagem evita a necessidade de verificar manualmente o evento de `scroll` continuamente.

Além disso, o projeto respeita a preferência do usuário através de:

```css
@media (prefers-reduced-motion: reduce)
```

Quando o usuário prefere reduzir movimentos, as animações são desativadas.

## 📱 Responsividade

O portfólio foi desenvolvido para funcionar em diferentes tamanhos de tela, incluindo:

* Celulares
* Tablets
* Notebooks
* Monitores desktop

Foram considerados casos de telas pequenas, orientação horizontal em dispositivos móveis, navegação por toque e ausência de `hover` em dispositivos touchscreen.

## 🛠️ Como executar localmente

### Pré-requisitos

É necessário ter o **Node.js** instalado.

Verifique a versão:

```bash
node -v
```

### Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/portfolio.git
```

Entre na pasta:

```bash
cd portfolio
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

O Vite disponibilizará o projeto em um endereço semelhante a:

```text
http://localhost:5173/
```

## 🔎 Qualidade e desenvolvimento

Durante o desenvolvimento, o projeto utiliza **ESLint** para auxiliar na identificação de problemas no código.

Para executar a verificação:

```bash
npm run lint
```

O desenvolvimento também segue uma organização baseada em componentes e commits seguindo o padrão **Conventional Commits**, utilizando categorias como:

* `feat` — nova funcionalidade
* `fix` — correção
* `style` — alterações visuais
* `refactor` — refatoração
* `docs` — documentação
* `chore` — configuração e manutenção

## 📌 Objetivo do projeto

Além de servir como meu portfólio profissional, este projeto também foi desenvolvido como uma oportunidade de aprofundar meus conhecimentos em:

* React
* TypeScript
* Componentização
* CSS responsivo
* Hooks
* APIs nativas do navegador
* Acessibilidade
* Organização de projetos front-end
* Git e GitHub

## 👨‍💻 Autor

**Keldson Henriques**

Estudante de Desenvolvimento de Software com foco em:

* Java
* Spring Boot
* React
* TypeScript
* Desenvolvimento de APIs REST

⭐ Se este projeto foi útil ou interessante para você, considere deixar uma estrela no repositório.
