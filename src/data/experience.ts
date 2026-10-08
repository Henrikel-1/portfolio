export interface ExperienceItem {
  title: string;
  place: string;
  period: string;
  description: string;
  tags: string[];
  note?: string;
}

export const experiences: ExperienceItem[] = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    place: "IFPB",
    period: "Mar/2025 – Dez/2027 (previsão)",
    description:
      "Comecei pela base de programação e lógica com Python, depois estudei Java e Programação Orientada a Objetos, estrutura de dados, algoritmos, front-end e padrões de projeto. No semestre atual, estudo arquitetura de software em camadas (controller, service, DAO e DTO), análise e desenvolvimento de projetos e processos de desenvolvimento de software, aplicando tudo isso em projetos reais. Também estou começando a estudar metodologias ágeis, como XP e Scrum.",
    tags: [
      "Python",
      "Java",
      "POO",
      "Estrutura de dados",
      "Algoritmos",
      "Front-end",
      "Padrões de projeto",
      "Arquitetura em camadas",
      "XP",
      "Scrum",
    ],
    note: "CRE: 87/100",
  },
  {
    title: "Monitoria de SQL e banco de dados",
    place: "IFPB",
    period: "Fev/2026 – Jun/2026",
    description:
      "Auxiliei alunos na criação de projetos com SQL e MySQL, explicando a lógica de banco de dados: como os dados são guardados e quais comandos SQL usar para buscá-los. Ajudei o professor criando atividades para as aulas e atendi dúvidas dos alunos pelo WhatsApp e em sessões no Google Meet.",
    tags: ["SQL", "MySQL", "Banco de dados"],
  },
];