"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

import { useToast } from "@/hooks/use-toast";
import { Models } from "appwrite";

import { databases } from "@/lib/appwrite";
import { ID } from "appwrite";

type Inputs = {
  name: string;
  country?: string;
  email?: string;
  feedback: string;
};

export default function Page() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    const promise = databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
      ID.unique(),
      { ...data }
    );

    promise.then(
      function (response: Models.Document) {
        console.log(response);
        toast({
          title: "Feedback submitted",
          description: "Thank you for your feedback!",
        });
      },
      function (error: Error) {
        console.log(error);
        toast({
          title: `${error}`,
          description: "Please try sending the feedback again.",
        });
      }
    );
  };

  return (
    <div className="flex flex-col items-start justify-center max-w-2xl mx-auto p-4">
      <div className="space-y-2 mb-8 w-full">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          Feedback
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Would love to hear your feedback! Please share your thoughts to help
          improve this library.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm text-slate-600 dark:text-slate-400">
            Name
          </label>
          <Input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <p role="alert" className="text-red-500 text-xs">
              Please enter your name to submit feedback
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="country"
            className="text-sm text-slate-600 dark:text-slate-400">
            Country (optional)
          </label>
          <Input type="text" id="country" {...register("country", {})} />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm text-slate-600 dark:text-slate-400">
            Email (optional)
          </label>
          <Input type="text" id="email" {...register("email")} />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="feedback"
            className="text-sm text-slate-600 dark:text-slate-400">
            Feedback
          </label>
          <Textarea
            id="feedback"
            {...register("feedback", { required: true })}
            className="resize-none h-32"
          />
          {errors.feedback?.type === "required" && (
            <p role="alert" className="text-red-500 text-xs">
              Please enter your feedback
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-400 
            dark:text-slate-900 dark:hover:bg-violet-400/90">
          Submit Feedback
        </Button>
      </form>
    </div>
  );
}
