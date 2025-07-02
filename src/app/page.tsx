import React from "react";
import { ModeToggle } from "@/components/mode-toggle"
import Form from "@/components/form"

export default function Home() {
  return (
    <main className="grid grid-rows-[60px_1fr] justify-center">
      <div className="flex justify-center items-center w-[900px] h-full">
        <ModeToggle />
      </div>
      <div className="flex justify-center items-center">
        <Form />
      </div>
    </main>
  );
}
