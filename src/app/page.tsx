"use client";

/* React Imports */
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

/* Types */
import { ResumeInputs } from "@/types";

/* UI Imports */
import { ModeToggle } from "@/components/mode-toggle";

/* Componentes externos */
import Form from "@/components/form";

/* Estado inicial do form. */
const defaultValues: ResumeInputs = {
  nomeCompleto: '',
  celular: '',
  idade: '',
  endereco: '',
  linkedin: '',
  email: '',
  cargo: '',
  resumoProfissional: '',
  formacao: [],
  experiencia: [],
  idiomas: [],
  formacaoComplementar: [],
  informacoesAdicionais: [],
};

const ResumePreviewDynamic = dynamic(
  () => import("@/components/ResumePreview").then(mod => mod.ResumePreview),
  { ssr: false }
)

export default function Home() {

  const formMethods = useForm<ResumeInputs>({
    defaultValues: defaultValues,
  });

  useEffect(() => {
    const savedData = localStorage.getItem('resumeDraft');
    if (savedData) {
      try {
        const parseData = JSON.parse(savedData);
        formMethods.reset(parseData);
      } catch (e) {
        console.error("Falha ao carregar o rascunho localStorage", e);
      }
    }
  }, [formMethods])

  const currentFormData = formMethods.watch()

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* Coluna do Formulário */}
      <div className="p-4 sm:p-6 md:p-8 overflow-y-auto h-screen">
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex justify-end mb-4">
            <ModeToggle />
          </div>
          <Form {...formMethods} getValues={formMethods.getValues} />
        </div>
      </div>

      {/* Coluna do Preview (escondida no mobile) */}
      <div className="hidden lg:block h-full">
        {/* O Preview lê os dados em tempo real usando o 'watch' que vem do formMethods */}
        <ResumePreviewDynamic
          key={JSON.stringify(currentFormData)}
          data={currentFormData}
        />
      </div>
    </main>
  );
}
