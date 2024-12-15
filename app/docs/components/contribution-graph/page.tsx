"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { contributionGraphCode } from "@/VitarkComponents/CodeToCopy/ContributionGraph";
import ContributionGraphPreview from "@/VitarkComponents/PreviewCode/ContributionGraphPreview";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page() {
  const [hasCopied, setHasCopied] = useState(false);

  function customPre({ children }: { children: React.ReactNode }) {
    return (
      <pre className="overflow-x-scroll no-scrollbar rounded-lg  bg-slate-950 dark:bg-slate-900/80  text-slate-200 w-full p-4">
        {children}
      </pre>
    );
  }

  async function handleCodeCopy() {
    try {
      await navigator.clipboard.writeText(contributionGraphCode);
      setHasCopied(true);

      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy the code", error);
    }
  }

  return (
    <div className="flex flex-col items-start justify-center">
      <div className="space-y-2 mb-8 px-2">
        <h2 className="text-xl font-semibold">Github Contribution Graph</h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
          Simple component to track your github contribution, your habit
          tracking or anything you want.
        </p>
      </div>
      <Tabs defaultValue="preview" className="w-screen xl:w-full">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="px-2">
          <ContributionGraphPreview />
        </TabsContent>
        <TabsContent value="code" className="px-2 xl:px-0">
          <div className="rounded-lg relative flex flex-col items-start text-base h-[35rem] ">
            <SyntaxHighlighter
              PreTag={customPre}
              language="typescript"
              wrapLongLines={true}
              style={nightOwl}>
              {contributionGraphCode}
            </SyntaxHighlighter>
            {hasCopied ? (
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
                onClick={handleCodeCopy}
                className="absolute top-4 right-5 text-slate-300 rounded-md">
                <Clipboard size={16} />
              </motion.button>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Page;
