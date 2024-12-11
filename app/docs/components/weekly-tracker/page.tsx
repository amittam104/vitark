"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { weeklyTrackerCode } from "@/VitarkComponents/CodeToCopy/weeklyTracker";
import WeeklyTrackerPreview from "@/VitarkComponents/PreviewCode/WeeklyTrackerPreview";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page() {
  const [hasCopied, setHasCopied] = useState(false);

  function customPre({ children }: { children: React.ReactNode }) {
    return (
      <pre className="overflow-x-scroll no-scrollbar rounded-lg  bg-slate-950 text-slate-200 w-full p-4">
        {children}
      </pre>
    );
  }

  async function handleCodeCopy() {
    try {
      await navigator.clipboard.writeText(weeklyTrackerCode);
      setHasCopied(true);

      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy the code", error);
    }
  }

  return (
    <div className="flex flex-col  items-start justify-center">
      <div className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Weekly Tracker</h2>
        <p className="text-slate-600">
          Simple component to track your weekly progress, use local storage or a
          database
        </p>
      </div>
      <Tabs defaultValue="preview" className="w-full">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <WeeklyTrackerPreview />
        </TabsContent>
        <TabsContent value="code">
          <div className="rounded-lg relative flex flex-col items-start text-base h-[35rem] ">
            <SyntaxHighlighter
              PreTag={customPre}
              language="typescript"
              style={nightOwl}>
              {weeklyTrackerCode}
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
