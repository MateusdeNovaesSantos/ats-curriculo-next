/* React Imports */
import { Control, UseFormRegister, useFieldArray, FieldErrors, Controller } from "react-hook-form";

/* Types Imports */
import { ResumeInputs } from "@/types";

/* Ui Imports */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

type Props = {
    control: Control<ResumeInputs>;
    register: UseFormRegister<ResumeInputs>;
    errors: FieldErrors<ResumeInputs>;
}

export const IdiomasSection = ({ control, register, errors }: Props) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "idiomas"
    });

    return (
        <div className="flex flex-col gap-6">
            <label htmlFor="">Seção Idiomas</label>
            <Button type="button" className="w-30 self-center" onClick={() => append({ idioma: "", nivel: "" })}>Adicionar</Button>
            {fields.map((field, index) => (
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
                    
                    <Button 
                        type="button" 
                        variant="ghost" 
                        className="self-center" 
                        size="sm" 
                        onClick={() => remove(index)}
                    >Remover</Button>
                </div>
            ))}
        </div>
    )
}