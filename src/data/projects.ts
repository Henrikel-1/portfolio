export interface Project {
  title: string;
  kind: string;
  description: string;
  role?: string;
  features: string[];
  technologies: string[];
  github: string;
}

export const projects: Project[] = [
  {
    title: "Library API",
    kind: "Projeto pessoal",
    description:
      "API REST para gestão de biblioteca, com autenticação JWT e controle de acesso por papéis (ADMIN e USER).",
    features: [
      "CRUD de livros e usuários, com busca, paginação e atualização parcial (PATCH)",
      "Cadastro e login com token JWT, e senhas criptografadas com BCrypt",
      "Rotas protegidas por papel com Spring Security",
      "Validação de dados e tratamento centralizado de erros",
      "Testes unitários (JUnit 5 e Mockito) e de integração (@DataJpaTest)",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JPA/Hibernate",
      "H2",
      "Gradle",
      "JUnit",
    ],
    github: "https://github.com/Henrikel-1/LibraryAPI-Spring-Boot",
  },
  {
    title: "SISMON: Sistema de Gestão de Monitoria",
    kind: "Projeto em equipe (3 pessoas)",
    description:
      "Sistema desktop para gerenciar os processos seletivos de monitoria do curso de ADS do IFPB. O coordenador lança os editais, os alunos se inscrevem e a classificação é calculada automaticamente pela nota da disciplina e pelo CRE.",
    role: "Analista de Regras de Negócio e QA",
    features: [
      "Coordenador: criar, editar, clonar e excluir editais, com vagas, pesos e docentes por disciplina",
      "Ranking automático e relatório de resultados em PDF",
      "Aluno: ver editais abertos, se inscrever e acompanhar o status",
      "Envio de e-mails de aviso aos candidatos",
    ],
    technologies: [
      "Java",
      "Java Swing",
      "MVC",
      "XStream",
      "iText",
      "Jakarta Mail",
    ],
    github: "https://github.com/Henrikel-1/cadastro-de-monitores-Ifpb",
  },
];