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

export const ComplementarSection = ({ control, register, errors}: Props) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "formacaoComplementar"
    })

    return (
        <div className="flex flex-col gap-6">
            <label htmlFor="">Seção Formação Complementar(Certificados)</label>
            <Button type="button" className="w-30 self-center" onClick={() => append({ curso: "", plataforma: "", cargaHoraria: "" })}>Adicionar</Button>
            {fields.map((field, index) => (
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
                        <Button 
                            type="button" 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => remove(index)}
                        >Remover</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}