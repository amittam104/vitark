export default function Page() {
  return (
    <div>
      <h1 className="text-xl text-slate-950 dark:text-slate-50 mb-8 mt-4">
        Introduction
      </h1>
      <p className="text-slate-700 dark:text-slate-300 mb-6 ">
        This is a collection of ready-to-use functional React components
        designed to streamline your development process, built on top of the
        Shadcn library.
      </p>
      <p className="mb-6 dark:text-slate-300">
        Use it in your <span className="font-medium text-slate-900 dark:text-slate-50">React</span>{" "}
        or <span className="font-medium text-slate-900 dark:text-slate-50">Next.js</span> project
        by copy pasting the components.
      </p>
      <p>Modify the code as per your need or use it as it is if you want.</p>
    </div>
  );
}
