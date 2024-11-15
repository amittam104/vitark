import { Diamond, GithubLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Input } from "./ui/input";
import { ThemeToggle } from "./ThemeToggle";

function Header() {
  return (
    <header className="py-2 w-full mx-auto max-w-[90rem] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Diamond size={20} weight="light" />
        <p className="font-light">Vitark</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Input />
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/amittam104/vitark" target="_blank">
            <GithubLogo size={20} weight="light" />
          </Link>
          <Link href="https://X.com/amittambulkar" target="_blank">
            <XLogo size={20} weight="light" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
