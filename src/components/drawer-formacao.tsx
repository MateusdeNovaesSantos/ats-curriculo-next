import { useState } from "react";
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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormacaoItem } from "@/types"

export default function DrawerFormacao({ onAdd }: { onAdd: (data: FormacaoItem) => void }) {

  const [localData, setLocalData] = useState({ curso: '', instituicao: '', conclusao: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalData(prev => ({
      ...prev,
      [e.target.id]: e.target.value 
    }))
  }

  const handleConfirm = () => {
    onAdd(localData);
    clearFields();
  }

  const clearFields = () => setLocalData({ curso: '', instituicao: '', conclusao: '' });

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
          <DrawerClose>
            <Button onClick={handleConfirm} className="w-full mb-2">Confirmar</Button>
            <Button variant="outline" onClick={clearFields} className="w-full">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
