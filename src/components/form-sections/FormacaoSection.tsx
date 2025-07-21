/* React Imports */
import { useState } from "react";
import { Control, FieldErrors, UseFormRegister, useFieldArray } from "react-hook-form";

/* Types Imports */
import { ResumeInputs, FormacaoItem } from "@/types";

/* Ui Imports */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import DrawerFormacao from "@/components/drawer-formacao";

type Props = {
    control: Control<ResumeInputs>;
    register: UseFormRegister<ResumeInputs>;
    errors: FieldErrors<ResumeInputs>;
}

export const FormacaoSection = ({ control, register, errors}: Props) => {

    const { fields, append, remove, update } = useFieldArray({
        control,
        name: "formacao"
    })

    const [editingIndex, setEditingIndex] = useState<number | null>(null);
        
        const handleSave = (data: FormacaoItem) => {
            if (editingIndex !== null) {
                update(editingIndex, data);
                setEditingIndex(null);
            } else {
                append(data);
            }
        }

        const handleEdit = (index: number) => {
            setEditingIndex(index);
            /* Lógica de abrir o drawer */
        }

    return (
        <div className="flex flex-col gap-6">
            <Separator className="mt-6"/>
            <label htmlFor="">Seção Formação Acadêmica</label>
            <DrawerFormacao onSave={handleSave} initialData={editingIndex !== null ? fields[editingIndex] : undefined} />

            <div id="formacao-list" className="flex flex-col gap-4">
                {fields.map((field, index) => (
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
                            <Button type="button" variant="outline" size="sm" onClick={() => setEditingIndex(index)}>Editar</Button>
                            <Button type="button" variant="ghost" size="sm" onClick={() => handleEdit(index)}>Remover</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};