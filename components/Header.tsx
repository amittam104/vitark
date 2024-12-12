import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Diamond, GithubLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import { PanelRight } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="max-w-screen flex items-center justify-between gap-8 lg:justify-start h-14 backdrop-blur-md z-10 fixed top-0 w-full">
      <div className="w-full flex items-center justify-between mx-8 gap-8">
        <Link href="/" className="flex items-center gap-2">
          <Diamond size={20} />
          <p className="">Vitark</p>
        </Link>

        {/* Desktop and Laptop navigation */}
        <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-between">
          <nav>
            <ul className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link href="/docs">Docs</Link>
              </li>
              <li>
                <Link href="/docs/components/weekly-tracker">Components</Link>
              </li>
              <li>
                <Link href="/docs">Feedback</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Link href="https://github.com/amittam104/vitark" target="_blank">
                <Button variant="ghost" size="icon">
                  <GithubLogo size={20} weight="light" />
                </Button>
              </Link>
              <Link href="https://X.com/attambulkar" target="_blank">
                <Button variant="ghost" size="icon">
                  <XLogo size={20} weight="light" />
                </Button>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="flex items-center lg:hidden">
          <Sheet>
            <SheetTrigger>
              <PanelRight size={20} strokeWidth={1.6} />
            </SheetTrigger>
            <SheetContent>
              <div className="absolute left-4 top-2">
                <ThemeToggle />
              </div>
              <div className="flex flex-col items-end gap-8 mt-10">
                <nav>
                  <ul className="flex flex-col items-end gap-4 text-sm text-slate-500">
                    <li>
                      <Link href="/docs">Docs</Link>
                    </li>
                    <li>
                      <Link href="/docs/components/weekly-tracker">
                        Components
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs">Feedback</Link>
                    </li>
                  </ul>
                </nav>

                <div className="flex items-center gap-2">
                  <Link
                    href="https://github.com/amittam104/vitark"
                    target="_blank">
                    <Button variant="ghost" size="icon">
                      <GithubLogo size={20} weight="light" />
                    </Button>
                  </Link>
                  <Link href="https://X.com/amittambulkar" target="_blank">
                    <Button variant="ghost" size="icon">
                      <XLogo size={20} weight="light" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
