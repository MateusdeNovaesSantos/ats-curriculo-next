/* React Imports */
import { Control, UseFormRegister, useFieldArray, FieldErrors } from "react-hook-form";

/* Types Imports */
import { ResumeInputs } from "@/types";

/* Ui Imports */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Props = {
    control: Control<ResumeInputs>;
    register: UseFormRegister<ResumeInputs>;
    errors: FieldErrors<ResumeInputs>;
}

export const AdicionalInfoSection = ({ control, register, errors }: Props) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "informacoesAdicionais"
    });

    return (
        <div className="flex flex-col gap-6">
            <label htmlFor="">Seção Informação Adicionais(Projetos Pessoais)</label>
            <Button type="button" className="w-30 self-center" onClick={() => append({ info: "" })}>Adicionar</Button>
            {fields.map((field, index) => (
                <div key={field.id} className="flex flex-col gap-6 p-4 border rounded-md relative">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="info">Informação Adicional</Label>
                        <Input id="info" placeholder="" {...register(`informacoesAdicionais.${index}.info`)}/>
                    </div>
                    <Separator/>
                    <div className="flex justify-between">
                        <Button type="button" variant="ghost" size="sm" onClick={() => remove(index)}>Remover</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}