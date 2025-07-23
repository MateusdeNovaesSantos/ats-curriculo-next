/* Chadcn Imports */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/* React Imports */
import { UseFormRegister } from "react-hook-form";

/* Types Imports */
import { ResumeInputs } from "@/types";

type Props = {
    register: UseFormRegister<ResumeInputs>;
}

export const PersonalInfoSection = ({ register }: Props) => {
    return (
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
                    <Input id="idade" type="number" placeholder="" {...register("idade", { valueAsNumber: true, min: 14, max: 99 })} />
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
    )
}