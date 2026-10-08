export interface SkillCategory {
  title: string;
  skills: string[];
  learning?: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "APIs REST",
      "JPA/Hibernate",
      "JUnit",
      "Mockito",
      "Python",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React Native",
    ],
    learning: ["TypeScript"],
  },
  {
    title: "Banco de dados",
    skills: ["SQL", "MySQL", "H2", "MongoDB"],
  },
  {
    title: "Ferramentas",
    skills: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "Gradle", "Docker"],
    learning: ["Docker"],
  },
];