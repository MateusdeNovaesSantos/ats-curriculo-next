"use client";
import React from "react";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";

/* Chadcn Imports */
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import DrawerFormacao from "@/components/drawer-formacao";
import DrawerExperiencia from "@/components/drawer-experiencia-profissional";

import { ResumeInputs } from "@/types";
import { ResumePDF } from "@/components/ResumePDF"

export default function Form() {

    // Vou revisar esse conceito depois
    const { register, control, handleSubmit, watch } = useForm<ResumeInputs>({
        defaultValues: {
            formacao: [],
            experiencia: [],
        }
    });

    const onSubmit: SubmitHandler<ResumeInputs> = data => {
        console.log("Dados do Formulário:", data);
        //lógica do PDF
    }

    const { fields: formacaoFields, append: appendFormacao, remove: removeFormacao } = useFieldArray({
        control,
        name: "formacao"
    })

    const { fields: experienciaFields, append: appendExperiencia, remove: removeExperiencia } = useFieldArray({
        control,
        name: "experiencia"
    })


    return (
        <Card className="w-[430px]">
            <CardHeader>
                <CardTitle>Faça seu currículo ATS</CardTitle>
                <CardDescription>
                    Monte seu currículo otimizado para ATS completo muito simples e rápido
                </CardDescription>
            </CardHeader>
            <pre className="mt-4 mx-4 p-4 bg-muted rounded-md text-sm">
                {JSON.stringify(watch(), null, 2)}
            </pre>
            <CardContent>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input id="nome" placeholder="" {...register("nomeCompleto")}></Input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="celular">Número de celular</Label>
                        <Input id="celular" placeholder="(99) 99999-9999" {...register("celular")}></Input>
                    </div>
                    <div className="grid gap-3 grid-cols-[60px_1fr]">
                        <div className="flex flex-1 flex-col gap-2">
                            <Label htmlFor="idade">Idade</Label>
                            <Input id="idade" placeholder="" {...register("idade")} />
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                            <Label htmlFor="endereco">Endereço</Label>
                            <Input id="endereco" placeholder="São Paulo, Morumbi/SP" {...register("endereco")} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row">
                        <div className="flex flex-1 flex-col gap-2">
                            <Label htmlFor="linkedin">Linkedin</Label>
                            <Input id="linkedin" placeholder="linkedin.com/in/exemple" {...register("linkedin")}></Input>
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="exemple@acme.com" {...register("email")}></Input>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                        <Label htmlFor="cargo">Cargo/Objetivo</Label>
                        <Input id="cargo" placeholder="Analista de Dados Jr" {...register("cargo")}></Input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="resumo-profissional">Resumo Profissional</Label>
                        <Textarea id="resumo-profissional" placeholder="Analista de Dados com 2 anos de experiência em ..." {...register("resumoProfissional")} />
                    </div>
                </div>
                <Separator className="my-6" />
                <div className="flex flex-col gap-6">
                    <label htmlFor="">Formação Acadêmica</label>
                    <DrawerFormacao onAdd={appendFormacao} />

                    <div id="formacao-list" className="flex flex-col gap-4">
                        {formacaoFields.map((field, index) => (
                            <div key={field.id} className="p-4 border rounded-md relative">
                                <p className="font-semibold mb-2">Formação #{index + 1}</p>
                                {/* Inputs para cada campo da formação */}
                                <div className="flex flex-1 flex-col gap-2">
                                    <Label>Curso</Label>
                                    <Input disabled {...register(`formacao.${index}.curso`)} />
                                    <div className="flex flex-1 flex-col gap-2">
                                    </div>
                                    <Label>Instituição</Label>
                                    <Input disabled {...register(`formacao.${index}.instituicao`)} />
                                </div>
                                {/* Botão para remover */}
                                <Button variant="destructive" size="sm" onClick={() => removeFormacao(index)} className="mt-2">
                                    Remover
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
                <Separator className="my-6" />
                <div className="flex flex-col gap-6">
                    <label htmlFor="">Experiência Profissional</label>
                    <DrawerExperiencia onAdd={appendExperiencia} />
                    <div id="experiencia-list" className="flex flex-col gap-4">
                        {experienciaFields.map((field, index) => (
                            <div key={field.id} className="p-4 border rounded-md relative">
                                <p className="font-semibold mb-2" >Experiência #{index + 1}</p>
                                {/* Inputs para cada campo de experiencia */}
                                <div className="flex flex-1 flex-col gap-2">
                                    <Label>Empresa</Label>
                                    <Input disabled {...register(`experiencia.${index}.empresa`)} />
                                    <div className="flex flex-1 flex-col gap-2">
                                    </div>
                                    <Label>Cargo</Label>
                                    <Input disabled {...register(`experiencia.${index}.cargo`)} />
                                </div>
                                {/* Botão para remover */}
                                <Button variant="destructive" size="sm" onClick={() => removeExperiencia(index)} className="mt-2">Remover</Button>
                            </div>
                        ))}
                    </div>
                </div>
                <Separator className="my-6" />
                <label htmlFor="">Idiomas</label>
                <Separator className="my-6" />
                <label htmlFor="">Formação Complementar(Certificados)</label>
                <Separator className="my-6" />
                <label htmlFor="">Informação Adicionais(Projetos Pessoais)</label>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Salvar Rascunho</Button>
                <PDFDownloadLink
                    document={<ResumePDF data={watch()} />}
                    fileName="curriculo-mateus.pdf"
                >
                    {({ loading }) =>
                        <Button disabled={loading}>
                            {loading ? 'Gerando...' : 'Gerar PDF'}
                        </Button>
                    }
                </PDFDownloadLink>

            </CardFooter>
        </Card>
    );
};