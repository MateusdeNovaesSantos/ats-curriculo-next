/* React Imports */
import { useState, useEffect } from "react";
import { Control, FieldErrors, UseFormRegister, useFieldArray } from "react-hook-form";
import { useMediaQuery } from "@/lib/hooks/use-media-query"

/* Types Imports */
import { ResumeInputs, FormacaoItem } from "@/types";

/* Ui Imports */
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Props = {
    control: Control<ResumeInputs>;
    register: UseFormRegister<ResumeInputs>;
}

const emptyFormacao: FormacaoItem = {
    curso: '',
    instituicao: '',
    conclusao: ''
}

export const FormacaoSection = ({ control, register}: Props) => {
    // A lógica do useFieldArray
    const { fields, append, remove, update } = useFieldArray({
        control,
        name: "formacao"
    })

    // Estados para controlar o Drawer: se está aberto, qual item estamos editando, e os dados locais do formulário do drawer.
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [localData, setLocalData] = useState<FormacaoItem>(emptyFormacao);
      
    // Efeito para preencher o formulário do drawer quando clicamos em "Editar"
    useEffect(() => {
        if (editingIndex !== null) {
            setLocalData(fields[editingIndex])
        }
    }, [editingIndex, fields])

    // Funções para manipular o estado do drawer
    const handleAddNew = () => {
        setEditingIndex(null);
        setLocalData(emptyFormacao);
        setIsDrawerOpen(true);
    }

    const handleEdit = (index: number) => {
        setEditingIndex(index);
        setIsDrawerOpen(true)
    }

    // Função unificada para salvar (cria um novo ou atualiza um existente)
    const handleSave = () => {
        if (editingIndex !== null) {
            update(editingIndex, localData);
            setEditingIndex(null);
        } else {
            append(localData);
        }
        setIsDrawerOpen(false);
    }

    // Funções para atualizar o estado local do formulário do drawer
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalData(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    // hooks
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <div className="flex flex-col gap-6">
            <Separator className="mt-6"/>
            <label htmlFor="">Seção Formação Acadêmica</label>
            <Button 
                type="button" 
                className="w-30 self-center"
                onClick={handleAddNew}
            >Adicionar</Button>
            {/* Componente Drawer */}
            <Drawer 
                direction={isDesktop ? 'right' : 'bottom'}
                open={isDrawerOpen}
                onOpenChange={setIsDrawerOpen}
            >
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Formação Acadêmica</DrawerTitle>
                        <DrawerDescription>Preencha todas as informações corretamente</DrawerDescription>
                    </DrawerHeader>

                    <div className="flex flex-col gap-6 px-6 overflow-y-auto">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="curso">Curso</Label>
                            <Input id="curso" value={localData.curso} onChange={handleChange} placeholder="Bacharel em Ciência da Computação"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="instituicao">Instituicao</Label>
                            <Input id="instituicao" value={localData.instituicao} onChange={handleChange} placeholder="USP(Universidade de São Paulo)"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="conclusao">Ano de conclusão do curso</Label>
                            <Input id="conclusao" value={localData.conclusao} onChange={handleChange} placeholder=""/>
                        </div>
                    </div>

                    <DrawerFooter>
                        <Button
                            type="button"
                            className="w-full mb-2"
                            onClick={handleSave} 
                        >Confirmar</Button>
                        <Button 
                            type="button"
                            variant="outline" 
                            className="w-full"
                            onClick={() => setIsDrawerOpen(false)}
                        >Cancelar</Button>
                    </DrawerFooter>
                </DrawerContent>
                </Drawer>

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
                        {/* Botão para remover e editar */}
                        <Separator />
                        <div className="flex justify-between">
                            <Button 
                                type="button" 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleEdit(index)}
                            >Editar</Button>
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
        </div>
    );
};