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

export type Idiomas = {
    idioma: string;
    nivel: 'Básico' | 'Intermediário' | 'Avançado' | 'Fluente';
}

export type FormacaoComplementarItem = {
    curso: string;
    plataforma: string;
    cargaHoraria: string;
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
    idiomas: Idiomas[];
    formacaoComplementar: FormacaoComplementarItem[];
    informacoesAdicionais: string[],
};