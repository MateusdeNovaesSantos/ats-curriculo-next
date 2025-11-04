# ATS Resume Builder

Um criador de currículos open-source, focado em gerar PDFs limpos e 100% otimizados para sistemas de rastreamento de candidatos (ATS).

Construído com Next.js, TypeScript e shadcn/ui.

[Live Demo (Vercel)](https://lnkd.in/d4HsUEP8) | [Repositório (GitHub)](https://github.com/MateusdeNovaesSantos/ats-curriculo-next)

## ✨ Funcionalidades

  * **Formulário Intuitivo:** Interface baseada em cards para preenchimento de informações pessoais, objetivo, resumo profissional, formação e experiência.
  * **Seções Dinâmicas:** Adicione múltiplas entradas para "Formação Acadêmica" e "Experiência Profissional" através de menus laterais (drawers).
  * **Preview em Tempo Real:** Visualize as mudanças no seu currículo em PDF instantaneamente (em telas maiores).
  * **Salvamento Local:** Use a função "Salvar Rascunho" para persistir seus dados no navegador (localStorage).
  * **Geração de PDF:** Exportação do currículo preenchido para um arquivo PDF com texto selecionável, otimizado para ATS.
  * **Salvamento Local:** Função "Salvar Rascunho" que utiliza o `localStorage` do navegador para persistir os dados.
  * **Design Responsivo:** Totalmente funcional em dispositivos móveis.
  * **Tema Customizável:** Suporte para temas Light, Dark e de Sistema.

## 🛠️ Stack de Tecnologias

  * **Framework:** [Next.js](https://nextjs.org/)
  * **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
  * **Biblioteca de UI:** [shadcn/ui](https://ui.shadcn.com/)
  * **Geração de PDF:** [@react-pdf/renderer](https://react-pdf.org/)
  * **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
  * **Ícones:** [Lucide React](https://lucide.dev/)
  * **Gerenciador de Pacotes:** [pnpm](https://pnpm.io/)

## 💻 Desafios Técnicos e Soluções

Este projeto foi um mergulho profundo na resolução de problemas do ecossistema React/Next.js.

1. Sincronização em Tempo Real (Formulário ↔ Preview)
* * Desafio: Manter o preview do PDF (um componente separado) 100% sincronizado com o formulário principal (com múltiplas seções dinâmicas).
* * Solução: Implementei o padrão "Lifting State Up". A lógica do react-hook-form foi centralizada no componente pai (page.tsx) e distribuída para os componentes filhos (Form.tsx e ResumePreview.tsx), garantindo uma única fonte da verdade.

2. Bugs de Hidratação (Hydration Mismatch)
* * Desafio: A aplicação apresentava erros de hidratação ao usar APIs do navegador (localStorage para o rascunho e window.matchMedia para o tema).
* * Solução: Garanti que a primeira renderização no servidor e no cliente fossem idênticas. Os dados específicos do cliente são carregados de forma assíncrona com useEffect e um state isClient, evitando a "discordância" de conteúdo.

3. Incompatibilidade: useFieldArray + @react-pdf/renderer
* * Desafio: O bug mais complexo. A função remove do useFieldArray (react-hook-form) causava um erro fatal (TypeError: Eo is not a function) na biblioteca @react-pdf/renderer.
* * Solução: Após muita depuração (incluindo downgrades de versão e limpeza de cache), a solução de contorno foi forçar uma re-renderização completa do componente de PDF, passando uma prop key dinâmica sempre que os dados do formulário mudavam (key={JSON.stringify(data)}).

## 🚀 Como Executar Localmente
Clone o repositório:
```Bash
git clone https://github.com/seu-usuario/ats-curriculo-next.git
cd ats-curriculo-next
```

Instale as dependências:
```Bash
pnpm install
```

Execute o servidor de desenvolvimento:
```Bash
pnpm dev
```

Abra http://localhost:3000 no seu navegador.

## 🚧 Roadmap (Próximas Etapas)
* [ ] Implementar validações (Zod) e máscaras para os campos (ex: formato de celular).
* [ ] Adicionar mais templates de currículo.
