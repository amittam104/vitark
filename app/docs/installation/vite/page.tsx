"use client";

import { Clipboard, ClipboardCheck } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const installVite = "npm create vite@latest";

function Page() {
  const [hasCopiedViteInstall, setHasCopiedViteInstall] = useState(false);

  function customPre({ children }: { children: React.ReactNode }) {
    return (
      <pre className="overflow-x-scroll no-scrollbar rounded-lg  bg-slate-950 dark:bg-slate-900/80  text-slate-200 w-full p-4">
        {children}
      </pre>
    );
  }

  async function handleCodeCopyViteInstall() {
    try {
      await navigator.clipboard.writeText(installVite);
      setHasCopiedViteInstall(true);

      setTimeout(() => {
        setHasCopiedViteInstall(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy the code", error);
    }
  }

  return (
    <div className="flex flex-col  items-start justify-center">
      <div className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Setup Vite</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Create a vite project, install tailwind css and Shadcn library to
          start using Vitark components.
        </p>
      </div>
      <div className="flex flex-col w-full gap-8">
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Create a vite project
          </p>
          <div className="rounded-lg relative flex flex-col items-start text-base h-auto w-full">
            <SyntaxHighlighter
              PreTag={customPre}
              language="typescript"
              style={nightOwl}>
              {installVite}
            </SyntaxHighlighter>
            {hasCopiedViteInstall ? (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                // whileTap={{ scale: 0.9, rotate: 3 }}
                className="absolute top-4 right-5 text-slate-300 rounded-md">
                <ClipboardCheck size={16} />
              </motion.button>
            ) : (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileTap={{ scale: 0.4, rotate: 2 }}
                onClick={handleCodeCopyViteInstall}
                className="absolute top-4 right-5 text-slate-300 rounded-md">
                <Clipboard size={16} />
              </motion.button>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Follow the prompts to setup the project
          </p>
          <div className="rounded-lg relative flex flex-col items-start text-base h-auto w-full">
            <SyntaxHighlighter
              PreTag={customPre}
              language="typescript"
              style={nightOwl}>
              {`Ok to proceed? (y) y
√ Project name: ... projectName
√ Select a framework: » React
√ Select a variant: » TypeScript`}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Now install and setup Tailwind CSS and Shadcn in the vite project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
