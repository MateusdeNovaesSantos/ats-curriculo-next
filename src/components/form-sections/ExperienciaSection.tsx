/* React Imports */
import { useState, useEffect } from "react"
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";
import { useMediaQuery } from "@/lib/hooks/use-media-query"

/* Types Imports */
import { ResumeInputs, ExperienciaItem } from "@/types";

/* Ui Imports */
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Props = {
    control: Control<ResumeInputs>;
    register: UseFormRegister<ResumeInputs>;
}

const emptyExperiencia: ExperienciaItem = {
    empresa: '',
    tamanhoEmpresa: '',
    cargo: '',
    inicio: '',
    fim: '',
    descricao: ['', '', '']
}

export const ExperienciaSection = ({ control, register }: Props) => {
    // A lógica do useFieldArray
    const { fields, append, remove, update } = useFieldArray({
        control,
        name: "experiencia"
    });

    // Estados para controlar o Drawer: se está aberto, qual item estamos editando, e os dados locais do formulário do drawer.
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [localData, setLocalData] = useState<ExperienciaItem>(emptyExperiencia);

    // Efeito para preencher o formulário do drawer quando clicamos em "Editar"
    useEffect(() => {
        if (editingIndex !== null) {
            setLocalData(fields[editingIndex]);
        }
    }, [editingIndex, fields]);

    // Funções para manipular o estado do drawer
    const handleAddNew = () => {
        setEditingIndex(null);
        setLocalData(emptyExperiencia);
        setIsDrawerOpen(true);
    }

    const handleEdit = (index: number) => {
        setEditingIndex(index);
        setIsDrawerOpen(true);
    }

    // Função unificada para salvar (cria um novo ou atualiza um existente)
    const handleSave = () => {
        if (editingIndex !== null) {
            update(editingIndex, localData);
        } else {
            append(localData);
        }
        setIsDrawerOpen(false);
    }

    // Funções para atualizar o estado local do formulário do drawer
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLocalData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const handleDescricaoChange = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        const newDescricao = [...localData.descricao] as [string, string, string];
        newDescricao[index] = e.target.value;
        setLocalData(prev => ({ ...prev, descricao: newDescricao }));
    }

    // hooks
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <div className="flex flex-col gap-6">
            <Label htmlFor="">Seção Experiência Profissional</Label>
            <Button type="button" className="w-30 self-center" onClick={handleAddNew}>Adicionar</Button>
            <Drawer 
                direction={isDesktop ? 'right' : 'bottom'} 
                open={isDrawerOpen} 
                onOpenChange={setIsDrawerOpen}
            >
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>{editingIndex !== null ? 'Editar Experiência' : 'Adicionar Experiência'}</DrawerTitle>
                        <DrawerDescription>Preencha todas as informações corretamente</DrawerDescription>
                    </DrawerHeader>
                        <div className="flex flex-col gap-6 px-6 overflow-y-auto">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="empresa">Empresa</Label>
                                <Input id="empresa" value={localData.empresa} onChange={handleChange} placeholder="Banco do Brasil"/>
                                <Select
                                value={localData.tamanhoEmpresa}
                                onValueChange={value => setLocalData(prev => ({ ...prev, tamanhoEmpresa: value as '' | 'pequeno' | 'médio' | 'grande' }))}
                                >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Tamanho da Empresa" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <SelectLabel>Selecione</SelectLabel>
                                    <SelectItem value="pequeno">Pequeno</SelectItem>
                                    <SelectItem value="médio">Médio</SelectItem>
                                    <SelectItem value="grande">Grande</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="cargo">Cargo</Label>
                                <Input id="cargo" value={localData.cargo} onChange={handleChange} placeholder="Analista de dados JR"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="inicio">Data de Início</Label>
                                <Input id="inicio" value={localData.inicio} onChange={handleChange} placeholder="jan/2099"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="fim">Data de Fim</Label>
                                <Input id="fim" value={localData.fim} onChange={handleChange} placeholder="dez/2099"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="descricao1">Descricao #1</Label>
                                <Textarea id="descricao1" value={localData.descricao[0]} onChange={(e) => handleDescricaoChange(e, 0)} placeholder="Descricao #1" className="resize-none" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="descricao2">Descricao #2</Label>
                                <Textarea id="descricao2" value={localData.descricao[1]} onChange={(e) => handleDescricaoChange(e, 1)} placeholder="Descricao #2" className="resize-none" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="descricao3">Descricao #3</Label>
                                <Textarea id="descricao3" value={localData.descricao[2]} onChange={(e) => handleDescricaoChange(e, 2)} placeholder="Descricao #3" className="resize-none" />
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
            <div className="flex flex-col gap-4">
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
    )
}