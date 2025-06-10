import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import DrawerFormacao from "@/components/drawer-formacao"
import DrawerExperiencia from "@/components/drawer-experiencia-profissional"

export default () => {
    return (
        <Card className="w-[430px]">
            <CardHeader>
                <CardTitle>Faça seu currículo ATS</CardTitle>
                <CardDescription>
                    Monte seu currículo otimizado para ATS completo muito simples e rápido 
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input id="nome" placeholder=""></Input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="celular">Número de celular</Label>
                        <Input id="celular" placeholder="(99) 99999-9999"></Input>
                    </div>
                    <div className="grid gap-3 grid-cols-[60px_1fr]">
                        <div className="flex flex-1 flex-col gap-2">
                            <Label htmlFor="idade">Idade</Label>
                            <Input id="idade" placeholder=""/>
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                            <Label htmlFor="endereco">Endereço</Label>
                            <Input id="endereco" placeholder="São Paulo, Morumbi/SP"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row">
                        <div className="flex flex-1 flex-col gap-2">
                            <Label htmlFor="linkedin">Linkedin</Label>
                            <Input id="linkedin" placeholder="linkedin.com/in/exemple"></Input>
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="exemple@acme.com"></Input>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                        <Label htmlFor="cargo">Cargo/Objetivo</Label>
                        <Input id="cargo" placeholder="Analista de Dados Jr"></Input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="resumo-profissional">Resumo Profissional</Label>
                        <Textarea id="resumo-profissional" placeholder="Analista de Dados com 2 anos de experiência em ..."/>
                    </div>
                </div>
                <Separator className="my-6"/>
                <div className="flex flex-col gap-6">
                    <label htmlFor="">Formação Acadêmica</label>
                        <DrawerFormacao />
                    <div></div>
                </div>
                <Separator className="my-6"/>
                <div className="flex flex-col gap-6">
                    <label htmlFor="">Experiência Profissional</label>
                        <DrawerExperiencia />
                    <div></div>
                </div>
                <Separator className="my-6"/>
                <label htmlFor="">Idiomas</label>
                <Separator className="my-6"/>
                <label htmlFor="">Formação Complementar(Certificados)</label>
                <Separator className="my-6"/>
                <label htmlFor="">Informação Adicionais(Projetos Pessoais)</label>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Save</Button>
                <Button>Gerar PDF</Button>
            </CardFooter>
        </Card>
    );
};