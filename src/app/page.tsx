"use client";

import { useEffect } from "react";
/* import dynamic from "next/dynamic"; */
import { useForm } from "react-hook-form";
import { ResumeInputs} from "@/types";
import { ModeToggle } from "@/components/mode-toggle";
import Form from "@/components/form";

// Estado inicial do form.
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

/* const ResumePreviewDynamic = dynamic(
  () => import("@/components/ResumePreview").then(mod => mod.ResumePreview),
  { ssr: false }
) */

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
        {/* 3. O Preview lê os dados em tempo real usando o 'watch' que vem do formMethods */}
        {/* <ResumePreviewDynamic data={formMethods.watch()} /> */}
      </div>
    </main>
  );
}
