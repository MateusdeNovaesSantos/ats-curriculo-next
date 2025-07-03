import { useState } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ExperienciaItem } from "@/types"

export default function DrawerExperiencia({ onAdd }: { onAdd: (data: ExperienciaItem) => void }) {

  const [localData, setLocalData] = useState({ empresa: '', tamanhoEmpresa: '', cargo: '', inicio: '', fim: '', descricao: [] });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalData(prev => ({
        ...prev,
        [e.target.id]: e.target.value 
      }))
    }

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setLocalData(prev => ({
        ...prev,
        [e.target.id]: e.target.value 
      }))
    }
  
    const handleConfirm = () => {
      onAdd(localData);
      clearFields();
    }
  
    const clearFields = () => setLocalData({ empresa: '', tamanhoEmpresa: '', cargo: '', inicio: '', fim: '', descricao: [] });

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button className="w-30 self-center">+</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Formação Acadêmica</DrawerTitle>
          <DrawerDescription>Preencha todas as informações corretamente</DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col gap-6 px-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="empresa">Empresa</Label>
            <Input id="empresa" value={localData.empresa} onChange={handleChange} placeholder="Banco do Brasil"/>
            <Select>
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
            <Textarea id="descricao1" value={localData.descricao[0]} onChange={handleTextChange} placeholder="Descricao #1" className="resize-none" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="descricao2">Descricao #2</Label>
            <Textarea id="descricao2" value={localData.descricao[1]} onChange={handleTextChange} placeholder="Descricao #2" className="resize-none" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="descricao3">Descricao #3</Label>
            <Textarea id="descricao3" value={localData.descricao[2]} onChange={handleTextChange} placeholder="Descricao #3" className="resize-none" />
          </div>
        </div>

        <DrawerFooter>
          <DrawerClose>
            <Button onClick={handleConfirm} className="w-full mb-2" >Confirmar</Button>
            <Button variant="outline" className="w-full">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
