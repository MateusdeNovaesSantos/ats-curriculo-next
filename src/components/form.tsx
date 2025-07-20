'use client';
import React from "react";
import dynamic from "next/dynamic";
import { useForm, useFieldArray, Controller } from "react-hook-form";

/* Chadcn Imports */
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import DrawerFormacao from "@/components/drawer-formacao";
import DrawerExperiencia from "@/components/drawer-experiencia-profissional";

import { ResumeInputs } from "@/types";
import { ResumePDF } from "@/components/ResumePDF"
/* import { mockResumeData } from "@/data/resume-mock-data"; */

const PDFDownloadLinkDynamic = dynamic(
    () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
    {
        ssr: false, // ssr: false é a chave! Significa "Server-Side Rendering: false"
        loading: () => <Button disabled>Gerando PDF...</Button>
    }
)

export default function Form() {

    // Vou revisar esse conceito depois
    const { register, control, watch } = useForm<ResumeInputs>({
        /* defaultValues: mockResumeData, */
        defaultValues: {
            formacao: [],
            experiencia: [],
            idiomas: [],
            formacaoComplementar: [],
            informacoesAdicionais: [],
        }
    });

    const { fields: formacaoFields, append: appendFormacao, remove: removeFormacao } = useFieldArray({
        control,
        name: "formacao"
    })

    const { fields: experienciaFields, append: appendExperiencia, remove: removeExperiencia } = useFieldArray({
        control,
        name: "experiencia"
    })

    const { fields: idiomaFields, append: appendIdioma, remove: removeIdioma } = useFieldArray({
        control,
        name: "idiomas"
    })

    const { fields: formacaoComplementarFields, append: appendFormacaoComplementar, remove: removeFormacaoComplementar } = useFieldArray({
        control,
        name: "formacaoComplementar"
    })

    const { fields: informacoesAdicionaisFields, append: appendInformacoesAdicionais, remove: removeInformacoesAdicionais } = useFieldArray({
        control,
        name: "informacoesAdicionais"
    })


    return (
        <Card className="w-[430px]">
            <CardHeader>
                <CardTitle>Faça seu currículo ATS</CardTitle>
                <CardDescription>
                    Monte seu currículo otimizado para ATS completo muito simples e rápido
                </CardDescription>
            </CardHeader>
            {/* <pre className="mt-4 mx-4 p-4 bg-muted rounded-md text-sm">
                {JSON.stringify(watch(), null, 2)}
            </pre> */}
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

                {/* Seção Formação Acadêmica */}
                <Separator className="my-6" />
                <div className="flex flex-col gap-6">
                    <label htmlFor="">Seção Formação Acadêmica</label>
                    <DrawerFormacao onAdd={appendFormacao} />

                    <div id="formacao-list" className="flex flex-col gap-4">
                        {formacaoFields.map((field, index) => (
                            <div key={field.id} className="flex flex-col gap-6 p-4 border rounded-md relative">
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
                                <Separator />
                                <div className="flex justify-between">
                                    <Button variant="outline" size="sm" >Editar</Button>
                                    <Button variant="ghost" size="sm" onClick={() => removeFormacao(index)}>Remover</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Separator className="my-6" />

                {/* Seção Experiência Profissional */}
                <div className="flex flex-col gap-6">
                    <label htmlFor="">Seção Experiência Profissional</label>
                    <DrawerExperiencia onAdd={appendExperiencia} />
                    <div id="experiencia-list" className="flex flex-col gap-4">
                        {experienciaFields.map((field, index) => (
                            <div key={field.id} className="flex flex-col gap-6 p-4 border rounded-md relative">
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
                                <Separator />
                                <div className="flex justify-between">
                                    <Button variant="outline" size="sm" >Editar</Button>
                                    <Button variant="ghost" className="self-center" size="sm" onClick={() => removeExperiencia(index)}>Remover</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Separator className="my-6" />

                {/* Seção Idiomas */}
                <div className="flex flex-col gap-6">
                    <label htmlFor="">Seção Idiomas</label>
                    <Button className="w-30 self-center" onClick={() => appendIdioma({ idioma: "", nivel: "" })}>Adicionar</Button>
                    {idiomaFields.map((field, index) => (
                        <div key={field.id} className="flex flex-col gap-6 p-4 border rounded-md relative">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="idioma">Idioma</Label>
                                <Input id="idioma" placeholder="" {...register(`idiomas.${index}.idioma`)}></Input>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="nivel">Nível de Fluência</Label>
                                <Controller
                                    control={control}
                                    name={`idiomas.${index}.nivel`}
                                    render={({ field }) => (
                                        <Select value={field.value} onValueChange={field.onChange}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Nível de Fluência" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Nivel</SelectLabel>
                                                    <SelectItem value="Básico">Básico</SelectItem>
                                                    <SelectItem value="Intermediário">Intermediário</SelectItem>
                                                    <SelectItem value="Avançado">Avançado</SelectItem>
                                                    <SelectItem value="Fluente">Fluente</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                                <Button variant="ghost" className="self-center" size="sm" onClick={() => removeIdioma(index)}>Remover</Button>
                            </div>
                        </div>
                    ))}
                </div>
                <Separator className="my-6" />

                {/* Seção Formação Complementar */}
                <div className="flex flex-col gap-6">
                    <label htmlFor="">Seção Formação Complementar(Certificados)</label>
                    <Button className="w-30 self-center" onClick={() => appendFormacaoComplementar({ curso: "", plataforma: "", cargaHoraria: "" })}>Adicionar</Button>
                    {formacaoComplementarFields.map((field, index) => (
                        <div key={field.id} className="flex flex-col gap-6 p-4 border rounded-md relative">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="curso">Nome do Curso</Label>
                                <Input id="curso" placeholder="" {...register(`formacaoComplementar.${index}.curso`)}></Input>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="plataforma">Nome da Plataforma</Label>
                                <Input id="plataforma" placeholder="" {...register(`formacaoComplementar.${index}.plataforma`)}></Input>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="cargaHoraria">Carga Horaria do curso</Label>
                                <Input id="cargaHoraria" placeholder="12h" {...register(`formacaoComplementar.${index}.cargaHoraria`)}></Input>
                            </div>
                            <Separator/>
                            <div className="flex justify-between">
                                <Button variant="ghost" size="sm" onClick={() => removeFormacaoComplementar(index)}>Remover</Button>
                            </div>
                        </div>
                    ))}
                </div>
                <Separator className="my-6" />

                {/* Seção Informações Adicionais */}
                <div className="flex flex-col gap-6">
                    <label htmlFor="">Seção Informação Adicionais(Projetos Pessoais)</label>
                    <Button className="w-30 self-center" onClick={() => appendInformacoesAdicionais({ info: "" })}>Adicionar</Button>
                    {informacoesAdicionaisFields.map((field, index) => (
                        <div key={field.id} className="flex flex-col gap-6 p-4 border rounded-md relative">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="info">Informação Adicional</Label>
                                <Input id="info" placeholder="" {...register(`informacoesAdicionais.${index}.info`)}/>
                            </div>
                            <Separator/>
                            <div className="flex justify-between">
                                <Button variant="ghost" size="sm" onClick={() => removeInformacoesAdicionais(index)}>Remover</Button>
                            </div>
                        </div>
                    ))}
                </div>
                <Separator className="mt-6"/>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Salvar Rascunho</Button>
                <PDFDownloadLinkDynamic
                    document={<ResumePDF data={watch()} />}
                    fileName="curriculo.pdf"
                >
                    <Button>Gerar PDF</Button>
                </PDFDownloadLinkDynamic>
            </CardFooter>
        </Card>
    );
};