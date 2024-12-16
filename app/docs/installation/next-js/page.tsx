"use client";

import { Clipboard, ClipboardCheck } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const createNextApp = "npx create-next-app@latest";
const installShadcn = "npx shadcn@latest init";

function Page() {
  const [hasCopiedNextInstall, setHasCopiedNextInstall] = useState(false);
  const [hasCopiedShadcnInstall, setHasCopiedShadcnInstall] = useState(false);

  function customPre({ children }: { children: React.ReactNode }) {
    return (
      <pre className="overflow-x-scroll no-scrollbar rounded-lg  bg-slate-950 dark:bg-slate-900/80  text-slate-200 w-full p-4">
        {children}
      </pre>
    );
  }

  async function handleCodeCopyNextInstall() {
    try {
      await navigator.clipboard.writeText(createNextApp);
      setHasCopiedNextInstall(true);

      setTimeout(() => {
        setHasCopiedNextInstall(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy the code", error);
    }
  }

  async function handleCodeCopyShadcnInstall() {
    try {
      await navigator.clipboard.writeText(installShadcn);
      setHasCopiedShadcnInstall(true);

      setTimeout(() => {
        setHasCopiedShadcnInstall(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy the code", error);
    }
  }

  return (
    <div className="flex flex-col items-start justify-center">
      <div className="space-y-2 mb-8 px-4">
        <h2 className="text-xl font-semibold">Setup Next.js</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Create a next js project, install Shadcn library to start using Vitark
          components.
        </p>
      </div>
      <div className="flex flex-col w-screen xl:w-full gap-8 px-4">
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Initiate a next js project
          </p>
          <div className="rounded-lg relative flex flex-col items-start text-base h-auto w-full">
            <SyntaxHighlighter
              PreTag={customPre}
              language="typescript"
              style={nightOwl}>
              {createNextApp}
            </SyntaxHighlighter>
            {hasCopiedNextInstall ? (
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
                onClick={handleCodeCopyNextInstall}
                className="absolute top-4 right-5 text-slate-300 rounded-md">
                <Clipboard size={16} />
              </motion.button>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Setup the project with following commands
          </p>
          <div className="rounded-lg relative flex flex-col items-start text-base h-auto w-full">
            <SyntaxHighlighter
              PreTag={customPre}
              language="typescript"
              style={nightOwl}>
              {`What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use src directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*`}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Install Shadcn
          </p>
          <div className="rounded-lg relative flex flex-col items-start text-base h-auto w-full">
            <SyntaxHighlighter
              PreTag={customPre}
              language="typescript"
              style={nightOwl}>
              {installShadcn}
            </SyntaxHighlighter>
            {hasCopiedShadcnInstall ? (
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
                onClick={handleCodeCopyShadcnInstall}
                className="absolute top-4 right-5 text-slate-300 rounded-md">
                <Clipboard size={16} />
              </motion.button>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Configure components.json
          </p>
          <div className="rounded-lg relative flex flex-col items-start text-base h-auto w-full">
            <SyntaxHighlighter
              PreTag={customPre}
              language="typescript"
              style={nightOwl}>
              {`Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Do you want to use CSS variables for colors? › no / yes
`}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            That&apos;s it, Start using the components.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
