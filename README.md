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

  - [x] Adicionar responsividade para uma melhor experiência em dispositivos móveis.
  - [x] Componentizar as seções internas do formulário para melhor organização do código.
  - [x] Implementar a funcionalidade de "Editar" para os itens de Formação e Experiência, reutilizando os componentes `Drawer`.
  - [x] Adicionar um painel de pré-visualização do PDF em tempo real (visível em desktops).
  - [ ] Implementar validações e máscaras para os campos (ex: limites de idade, formato do número de celular).

## 🛠️ Stack de Tecnologias

  * **Framework:** [Next.js](https://nextjs.org/)
  * **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
  * **Biblioteca de UI:** [shadcn/ui](https://ui.shadcn.com/)
  * **Geração de PDF:** [@react-pdf/renderer](https://react-pdf.org/)
  * **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
  * **Ícones:** [Lucide React](https://lucide.dev/)
  * **Gerenciador de Pacotes:** [pnpm](https://pnpm.io/)

## 💻 Desafios Superados Durante o Desenvolvimento

Este projeto apresentou diversos desafios técnicos interessantes, cuja superação foi fundamental para o meu aprendizado em desenvolvimento web moderno com Next.js e React.

Gerenciamento de Estado Complexo: O formulário, com suas múltiplas seções dinâmicas, exigiu a implementação de uma arquitetura de estado robusta. A solução foi "elevar o estado" (lifting state up), centralizando a lógica do react-hook-form no componente page.tsx para que pudesse ser compartilhado entre o formulário principal (Form.tsx) e o painel de pré-visualização (ResumePreview.tsx).

Bugs de Hidratação (Hydration Mismatch): A aplicação apresentou erros de hidratação devido a lógicas que dependiam de APIs do navegador (localStorage e window.matchMedia). A solução foi garantir que a primeira renderização no servidor e no cliente fossem idênticas, e então usar o hook useEffect para carregar os dados específicos do cliente (rascunho salvo e tamanho da tela) de forma assíncrona, após a hidratação bem-sucedida.

Incompatibilidade de Dependências: O projeto encontrou um bug crítico e persistente (TypeError: Eo is not a function) ao usar a função remove do useFieldArray em conjunto com a biblioteca @react-pdf/renderer. Após um processo de depuração e uma série de tentativas de correção que incluiu o downgrade de versões do React e a limpeza completa do cache de pacotes (pnpm store prune), a solução final foi contornar o bug da biblioteca, forçando uma re-renderização completa do componente de PDF através de uma prop key dinâmica (key={JSON.stringify(data)}).

Componentização e Encapsulamento: O componente principal do formulário (Form.tsx) foi totalmente refatorado. A lógica de cada seção, incluindo a manipulação de arrays com useFieldArray e o controle de componentes Drawer, foi encapsulada em seus próprios componentes de seção (FormacaoSection.tsx, ExperienciaSection.tsx, etc.), tornando o código mais limpo, modular e fácil de manter.

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