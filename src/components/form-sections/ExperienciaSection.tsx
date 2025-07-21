/* React Imports */
import { Control, UseFormRegister, useFieldArray, FieldErrors } from "react-hook-form";

/* Types Imports */
import { ResumeInputs } from "@/types";

/* Ui Imports */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import DrawerExperiencia from "@/components/drawer-experiencia-profissional";

type Props = {
    control: Control<ResumeInputs>;
    register: UseFormRegister<ResumeInputs>;
    errors: FieldErrors<ResumeInputs>;
}

export const ExperienciaSection = ({ control, register, errors }: Props) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "experiencia"
    });

    return (
        <div className="flex flex-col gap-6">
            <Label htmlFor="">Seção Experiência Profissional</Label>
            <DrawerExperiencia onAdd={append} />
            <div id="experiencia-list" className="flex flex-col gap-4">
                {fields.map((field, index) => (
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
                            <Button type="button" variant="outline" size="sm" >Editar</Button>
                            <Button type="button" variant="ghost" className="self-center" size="sm" onClick={() => remove(index)}>Remover</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}