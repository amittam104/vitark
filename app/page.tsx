import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Vitark.dev</h1>
      <Link href="/components">
        <button className="px-4 py-2 bg-slate-900 rounded-lg shadow-md text-slate-50">
          Components
        </button>
      </Link>
    </div>
  );
}
