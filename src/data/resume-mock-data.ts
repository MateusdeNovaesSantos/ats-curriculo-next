import { ResumeInputs } from "@/types";

// Criamos uma constante chamada 'mockResumeData' e garantimos
// que ela segue o formato da interface 'ResumeInputs'.
// O TypeScript nos avisaria se esquecêssemos algum campo!

export const mockResumeData: ResumeInputs = {
  nomeCompleto: "MATEUS DE NOVAES SANTOS",
  celular: "(75) 99912-0928",
  idade: "21",
  endereco: "São Paulo, Cidade Ademar/SP",
  linkedin: "www.linkedin.com/in/mateus-novaes",
  email: "emw.mateus@gmail.com",
  cargo: "Analista de Dados",
  resumoProfissional: "Analista de Dados com 2 anos de experiência em Análise de Dados, Banco de Dados e Processos ETL. Na Compass UOL, desenvolvi ETL com PySpark e Docker, além de dashboards no AWS QuickSight. Na Universidade de Salvador, analisei um Banco de Dados de saúde fetal e treinei um modelo de classificação com PyCaret. Experiência com SQL Server, Bases de Dados, Elaboração e Geração de Relatórios, focado em Criação e Desenvolvimento de soluções. Habilidade em informações estratégicas, atendimento a clientes e utilização de dados para otimização de processos.",

  formacao: [
    {
      curso: "Bacharel em Ciência da Computação",
      instituicao: "UNIFACS (Universidade de Salvador)",
      conclusao: "2024",
    },
  ],

  experiencia: [
    {
      cargo: "Analista de dados",
      empresa: "COMPASS UOL",
      tamanhoEmpresa: "grande",
      inicio: "jul/2023",
      fim: "dez/2023",
      descricao: 
        [
        "Desenvolvi e otimizei processos ETL utilizando PySpark e Docker.", 
        "Criei dashboards interativos no AWS QuickSight para análise de dados.", 
        "Gerenciei e consultei Banco de Dados e SQL Server para gerar insights."
        ],
    },
    {
      cargo: "Pesquisador",
      empresa: "UNIFACS",
      tamanhoEmpresa: "grande",
      inicio: "ago/2022",
      fim: "dez/2024",
      descricao: 
        [
        "Analisei um Banco de Dados de saúde fetal para extração de insights.", 
        "Treinei um modelo de classificação com PyCaret para predição de riscos.", 
        "Elaborei relatórios e visualizações para suporte a decisões estratégicas."
        ]
    }
  ],
  
  
  idiomas: [
    { idioma: "Inglês", nivel: "Avançado" }
  ],
  formacaoComplementar: [
    { curso: "Python 3 - Curso Completo do Básico ao Avançado", plataforma: "Udemy", cargaHoraria: "26h" },
    { curso: "Docker p/ Desenvolvedores c/ Docker Swarm e Kubernetes", plataforma: "Udemy", cargaHoraria: "12h" },
    { curso: "SQL para Análise de Dados Do básico ao avançado", plataforma: "Udemy", cargaHoraria: "6h" },
  ],
  informacoesAdicionais: [
    "CNH A e B",
    "Projeto Web com NEXT.js e Flask"
  ]
};