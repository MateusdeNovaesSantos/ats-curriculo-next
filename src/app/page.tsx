import React from "react";
import { ModeToggle } from "@/components/mode-toggle"
import Form from "@/components/form"

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-2xl flex justify-end mb-4">
        <ModeToggle />
      </div>
      <div className="w-full max-w-lg">
        <Form />
      </div>
    </main>
  );
}
