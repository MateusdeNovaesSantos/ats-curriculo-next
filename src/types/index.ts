export type FormacaoItem = {
    curso: string;
    instituicao: string;
    conclusao: string;
}

export type ExperienciaItem = {
    empresa: string;
    tamanhoEmpresa: string;
    cargo: string;
    inicio: string;
    fim: string;
    descricao: string[];
}

export type ResumeInputs = {
    nomeCompleto: string;
    celular: string;
    idade: string;
    endereco: string;
    linkedin: string;
    email: string;
    cargo: string;
    resumoProfissional: string;
    formacao: FormacaoItem[];
    experiencia: ExperienciaItem[];
};