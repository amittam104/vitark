"use client";

import { Clipboard, ClipboardCheck } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const installTailwind = `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`;
const configurePath = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;
const tailwindDirectives = `@tailwind base;
@tailwind components;
@tailwind utilities;`;

function Page() {
  const [hasCopiedTailwindInstall, setHasCopiedTailwindInstall] =
    useState(false);
  const [hasCopiedConfigPaths, setHasCopiedConfigPaths] = useState(false);
  const [hasCopiedAddDirectives, setHasCopiedAddDirectives] = useState(false);

  function customPre({ children }: { children: React.ReactNode }) {
    return (
      <pre className="overflow-x-scroll no-scrollbar rounded-lg  bg-slate-950 dark:bg-slate-900/80 text-slate-200 w-full p-4">
        {children}
      </pre>
    );
  }

  async function handleCodeCopyTailwindInstall() {
    try {
      await navigator.clipboard.writeText(installTailwind);
      setHasCopiedTailwindInstall(true);

      setTimeout(() => {
        setHasCopiedTailwindInstall(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy the code", error);
    }
  }

  async function handleCodeCopyConfigPaths() {
    try {
      await navigator.clipboard.writeText(configurePath);
      setHasCopiedConfigPaths(true);

      setTimeout(() => {
        setHasCopiedConfigPaths(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy the code", error);
    }
  }

  async function handleCodeCopyAddDirectives() {
    try {
      await navigator.clipboard.writeText(tailwindDirectives);
      setHasCopiedAddDirectives(true);

      setTimeout(() => {
        setHasCopiedAddDirectives(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy the code", error);
    }
  }

  return (
    <div className="flex flex-col  items-start justify-center">
      <div className="space-y-2 mb-8 px-4">
        <h2 className="text-xl font-semibold">Install Tailwind CSS</h2>
        <p className="text-slate-600 dark:text-slate-400">
          After you setup your project with vite, install and setup Tailwind
          css.
        </p>
      </div>
      <div className="flex flex-col w-screen xl:w-full gap-8 px-4">
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Install Tailwind CSS
          </p>
          <div className="rounded-lg relative flex flex-col items-start text-base h-auto w-full">
            <SyntaxHighlighter
              PreTag={customPre}
              language="typescript"
              style={nightOwl}>
              {installTailwind}
            </SyntaxHighlighter>
            {hasCopiedTailwindInstall ? (
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
                onClick={handleCodeCopyTailwindInstall}
                className="absolute top-4 right-5 text-slate-300 rounded-md">
                <Clipboard size={16} />
              </motion.button>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Configure your template paths
          </p>
          <div className="rounded-lg relative flex flex-col items-start text-base h-auto w-full">
            <SyntaxHighlighter
              PreTag={customPre}
              language="typescript"
              style={nightOwl}>
              {configurePath}
            </SyntaxHighlighter>
            {hasCopiedConfigPaths ? (
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
                onClick={handleCodeCopyConfigPaths}
                className="absolute top-4 right-5 text-slate-300 rounded-md">
                <Clipboard size={16} />
              </motion.button>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Add the Tailwind directives to your CSS
          </p>
          <div className="rounded-lg relative flex flex-col items-start text-base h-auto w-full">
            <SyntaxHighlighter
              PreTag={customPre}
              language="typescript"
              style={nightOwl}>
              {tailwindDirectives}
            </SyntaxHighlighter>
            {hasCopiedAddDirectives ? (
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
                onClick={handleCodeCopyAddDirectives}
                className="absolute top-4 right-5 text-slate-300 rounded-md">
                <Clipboard size={16} />
              </motion.button>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Tailwind is installed in your project. Now let&apos;s configure it
            and add shadcn.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
