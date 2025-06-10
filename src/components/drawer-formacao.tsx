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

export default () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger >
        <Button className="w-30">+</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Formação Acadêmica</DrawerTitle>
          <DrawerDescription>Preencha todas as informações corretamente</DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col gap-6 px-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="curso">Curso</label>
            <Input id="curso" placeholder="Bacharel em Ciência da Computação"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="instituicao">Instituicao</label>
            <Input id="instituicao" placeholder="USP(Universidade de São Paulo)"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="conclusao">Ano de conclusão do curso</label>
            <Input id="conclusao" placeholder=""/>
          </div>
        </div>

        <DrawerFooter>
          <Button className="w-full">Confirmar</Button>
          <DrawerClose>
            <Button variant="outline" className="w-full">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
