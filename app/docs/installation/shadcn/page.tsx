"use client";

import { Clipboard, ClipboardCheck } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const EditTSConfig = `{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`;

const EditTSConfigApp = `{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}`;

const installNode = `# (so you can import "path" without error)
npm i -D @types/node
`;

const updateViteConfig = `import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`;

const shadcnInstall = "npx shadcn@latest init";

function Page() {
  const [hasCopiedTSConfig, setHasCopiedTSConfig] = useState(false);
  const [hasCopiedTSConfigApp, setHasCopiedTSConfigApp] = useState(false);
  const [hasCopiedInstallNode, setHasCopiedInstallNode] = useState(false);
  const [hasCopiedViteConfig, setHasCopiedViteConfig] = useState(false);
  const [hasCopiedShadcnInstall, setHasCopiedShadcnInstall] = useState(false);

  function customPre({ children }: { children: React.ReactNode }) {
    return (
      <pre className="overflow-x-scroll no-scrollbar rounded-lg  bg-slate-950 dark:bg-slate-900/80 text-slate-200 w-full p-4">
        {children}
      </pre>
    );
  }

  async function handleCodeCopyTSConfig() {
    try {
      await navigator.clipboard.writeText(EditTSConfig);
      setHasCopiedTSConfig(true);

      setTimeout(() => {
        setHasCopiedTSConfig(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy the code", error);
    }
  }

  async function handleCodeCopyTSConfigApp() {
    try {
      await navigator.clipboard.writeText(EditTSConfigApp);
      setHasCopiedTSConfigApp(true);

      setTimeout(() => {
        setHasCopiedTSConfigApp(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy the code", error);
    }
  }

  async function handleCodeCopyInstallNode() {
    try {
      await navigator.clipboard.writeText(installNode);
      setHasCopiedInstallNode(true);

      setTimeout(() => {
        setHasCopiedInstallNode(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy the code", error);
    }
  }

  async function handleCodeCopyViteConfig() {
    try {
      await navigator.clipboard.writeText(updateViteConfig);
      setHasCopiedViteConfig(true);

      setTimeout(() => {
        setHasCopiedViteConfig(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy the code", error);
    }
  }

  async function handleCodeCopyShadcnInstall() {
    try {
      await navigator.clipboard.writeText(shadcnInstall);
      setHasCopiedShadcnInstall(true);

      setTimeout(() => {
        setHasCopiedShadcnInstall(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy the code", error);
    }
  }

  return (
    <div className="flex flex-col  items-start justify-center">
      <div className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Install Shadcn</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Config your tailwind css and install Shadcn library to start using
          Vitark components.
        </p>
      </div>
      <div className="flex flex-col w-full gap-8">
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">Edit tsconfig.json file</p>
          <div className="rounded-lg relative flex flex-col items-start text-base h-auto w-full">
            <SyntaxHighlighter
              PreTag={customPre}
              language="typescript"
              style={nightOwl}>
              {EditTSConfig}
            </SyntaxHighlighter>
            {hasCopiedTSConfig ? (
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
                onClick={handleCodeCopyTSConfig}
                className="absolute top-4 right-5 text-slate-300 rounded-md">
                <Clipboard size={16} />
              </motion.button>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">Edit tsconfig.app.json file</p>
          <div className="rounded-lg relative flex flex-col items-start text-base h-auto w-full">
            <SyntaxHighlighter
              PreTag={customPre}
              language="typescript"
              style={nightOwl}>
              {EditTSConfigApp}
            </SyntaxHighlighter>
            {hasCopiedTSConfigApp ? (
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
                onClick={handleCodeCopyTSConfigApp}
                className="absolute top-4 right-5 text-slate-300 rounded-md">
                <Clipboard size={16} />
              </motion.button>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">Update vite.config.ts</p>
          <div className="rounded-lg relative flex flex-col items-start text-base h-auto w-full">
            <SyntaxHighlighter
              PreTag={customPre}
              language="typescript"
              style={nightOwl}>
              {installNode}
            </SyntaxHighlighter>
            {hasCopiedInstallNode ? (
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
                onClick={handleCodeCopyInstallNode}
                className="absolute top-4 right-5 text-slate-300 rounded-md">
                <Clipboard size={16} />
              </motion.button>
            )}
          </div>
          <div className="rounded-lg relative flex flex-col items-start text-base h-auto w-full">
            <SyntaxHighlighter
              PreTag={customPre}
              language="typescript"
              style={nightOwl}>
              {updateViteConfig}
            </SyntaxHighlighter>
            {hasCopiedViteConfig ? (
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
                onClick={handleCodeCopyViteConfig}
                className="absolute top-4 right-5 text-slate-300 rounded-md">
                <Clipboard size={16} />
              </motion.button>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">Run the CLI</p>
          <div className="rounded-lg relative flex flex-col items-start text-base h-auto w-full">
            <SyntaxHighlighter
              PreTag={customPre}
              language="typescript"
              style={nightOwl}>
              {shadcnInstall}
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
          <p className="text-sm text-slate-600 dark:text-slate-400">Configure components.json</p>
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
