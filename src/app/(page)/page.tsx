"use client";
import { useState } from "react";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreateCodeEditor } from "@/components/create-code-editor";

export default function Landing() {
  const [code, setCode] = useState("");

  return (
    <main className="p-8 px-10">
      <header className="pb-4 leading-tight">
        <span className="flex items-center gap-2">
          <Image
            src="/static/images/logo-light.png"
            alt="Pastebon Logo"
            width={48}
            height={48}
            priority
            className="hidden size-6 items-center dark:block"
          />
          <Image
            src="/static/images/logo-dark.png"
            alt="Pastebon Logo"
            width={48}
            height={48}
            priority
            className="block size-6 items-center dark:hidden"
          />
          <p className="font-grotesque text-xl font-medium">Pastebon</p>
        </span>
        <p className="text-sm">
          Paste your codes, logs, and errors{" "}
          <strong className="font-semibold underline">anonymously</strong>.
        </p>
      </header>
      <Card>
        <CardHeader></CardHeader>
        <CardContent className="-mt-4">
          <CreateCodeEditor code={code} setCode={setCode} />
        </CardContent>
      </Card>
    </main>
  );
}
