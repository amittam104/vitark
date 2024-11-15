import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Diamond, GithubLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import { PanelRight } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="py-2 px-4 flex items-center justify-between gap-8 lg:justify-start h-14 max-w-[90rem] mx-auto">
      <div className="flex items-center gap-2">
        <Diamond size={20} weight="light" />
        <p className="font-light">Vitark</p>
      </div>

      {/* Desktop and Laptop navigation */}
      <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-between">
        <nav>
          <ul className="flex items-center gap-4 text-sm text-neutral-500">
            <li>Docs</li>
            <li>Components</li>
            <li>Feedback</li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Link href="https://github.com/amittam104/vitark" target="_blank">
              <Button variant="ghost" size="icon">
                <GithubLogo size={20} weight="light" />
              </Button>
            </Link>
            <Link href="https://X.com/amittambulkar" target="_blank">
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
                <ul className="flex flex-col items-end gap-4 text-sm text-neutral-500">
                  <li>Docs</li>
                  <li>Components</li>
                  <li>Feedback</li>
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
    </header>
  );
}

export default Header;
