# ATS Resume Builder

> Um projeto pessoal para criar um currículo online otimizado para sistemas de rastreamento de candidatos (ATS), construído com Next.js, TypeScript e shadcn/ui.

Este projeto foi desenvolvido como uma ferramenta para montar um currículo completo de forma simples e rápida, com um design limpo e focado em passar pelos filtros automatizados de processos seletivos. A inspiração e os dados de exemplo foram baseados no currículo de [Mateus de Novaes Santos](https://www.google.com/search?q=https://www.linkedin.com/in/mateus-novaes), um Analista de Dados.

## ✨ Funcionalidades

  * **Formulário Intuitivo:** Interface baseada em cards para preenchimento de informações pessoais, objetivo, resumo profissional, formação e experiência.
  * **Seções Dinâmicas:** Adicione múltiplas entradas para "Formação Acadêmica" e "Experiência Profissional" através de menus laterais (drawers).
  * **Tema Customizável:** Suporte para temas Light, Dark e de Sistema.
  * **Geração de PDF:** Exportação do currículo preenchido para um arquivo PDF com texto selecionável, otimizado para ATS.
  * **Salvamento Local:** Função "Salvar Rascunho" que utiliza o `localStorage` do navegador para persistir os dados.

## 🚧 Próximas Etapas / Roadmap

  - [ ] Adicionar responsividade para uma melhor experiência em dispositivos móveis.
  - [ ] Componentizar as seções internas do formulário para melhor organização do código.
  - [ ] Implementar a funcionalidade de "Editar" para os itens de Formação e Experiência, reutilizando os componentes `Drawer`.
  - [ ] Adicionar um painel de pré-visualização do PDF em tempo real (visível em desktops).
  - [ ] Implementar validações e máscaras para os campos (ex: limites de idade, formato do número de celular).

## 🛠️ Stack de Tecnologias

  * **Framework:** [Next.js](https://nextjs.org/)
  * **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
  * **Biblioteca de UI:** [shadcn/ui](https://ui.shadcn.com/)
  * **Geração de PDF:** [@react-pdf/renderer](https://react-pdf.org/)
  * **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
  * **Ícones:** [Lucide React](https://lucide.dev/)
  * **Gerenciador de Pacotes:** [pnpm](https://pnpm.io/)

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/ats-curriculo-next.git
    cd ats-curriculo-next
    ```

2.  **Instale as dependências:**

    ```bash
    pnpm install
    ```

3.  **Execute o servidor de desenvolvimento:**

    ```bash
    pnpm dev
    ```

4.  Abra [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) no seu navegador para ver o resultado.