"use client";

/* React Imports */
import React from "react";
import dynamic from "next/dynamic";
import { UseFormReturn, UseFormGetValues } from "react-hook-form";

/* Form Sections Components Imports */
import { PersonalInfoSection } from "@/components/form-sections/PersonalInfoSection";
import { FormacaoSection } from "@/components/form-sections/FormacaoSection";
import { ExperienciaSection } from "@/components/form-sections/ExperienciaSection";
import { IdiomasSection } from "@/components/form-sections/IdiomasSection";
import { ComplementarSection } from "@/components/form-sections/ComplementarSection";
import { AdicionalInfoSection } from "@/components/form-sections/AdicionalInfoSection";

/* Chadcn Imports */
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ResumeInputs } from "@/types";
import { ResumePDF } from "@/components/ResumePDF"

type FormProps = UseFormReturn<ResumeInputs> & {
    getValues: UseFormGetValues<ResumeInputs>;
}

const PDFDownloadLinkDynamic = dynamic(
    () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
    {
        ssr: false,
        loading: () => <Button disabled>Gerando PDF...</Button>
    }
)

export default function Form({ register, control, watch, getValues, formState: { errors } }: FormProps) {
    
    const handleSaveDraft = () => {
        const currentData = getValues();
        localStorage.setItem('resumeDraft', JSON.stringify(currentData));
        alert('Rascunho salvo com sucesso!')
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Faça seu currículo ATS</CardTitle>
                <CardDescription>
                    Monte seu currículo otimizado para ATS completo muito simples e rápido
                </CardDescription>
            </CardHeader>
            <CardContent>
                {/* Seção Informações Pessoais */}
                <PersonalInfoSection 
                    register={register} 
                    errors={errors}
                />
                
                {/* Seção Formação Acadêmica */}
                <FormacaoSection
                    control={control}
                    register={register}
                    errors={errors}
                /> 
                <Separator className="my-6" />

                {/* Seção Experiência Profissional */}
                <ExperienciaSection
                    control={control}
                    register={register}
                    errors={errors}
                    />
                <Separator className="my-6" />

                {/* Seção Idiomas */}
                <IdiomasSection
                    control={control}
                    register={register}
                    errors={errors}
                />
                <Separator className="my-6" />

                {/* Seção Formação Complementar */}
                <ComplementarSection
                    control={control}
                    register={register}
                    errors={errors}
                />
                <Separator className="my-6" />

                {/* Seção Informações Adicionais */}
                <AdicionalInfoSection
                    control={control}
                    register={register}
                    errors={errors}
                />
                <Separator className="mt-6"/>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleSaveDraft}
                >Salvar Rascunho</Button>
                <PDFDownloadLinkDynamic
                    document={<ResumePDF data={watch()} />}
                    fileName="curriculo.pdf"
                >
                    <Button type="button">Gerar PDF</Button>
                </PDFDownloadLinkDynamic>
            </CardFooter>
        </Card>
    );
};