"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Diamond, GithubLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import { PanelRight } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Calendar, Filter, LayoutGrid } from "lucide-react";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <header className="max-w-screen flex items-center justify-between gap-8 lg:justify-start h-14 backdrop-blur-md z-10 fixed top-0 w-full">
      <div className="w-full flex items-center justify-between mx-2 md:mx-4 lg:mx-8 gap-8">
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
                <Link href="/docs/feedback">Feedback</Link>
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
            <SheetContent side="left">
              <div className="absolute flex items-center gap-8 left-4 top-2">
                <ThemeToggle />
                <div className="flex items-center gap-8">
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
              <div className="flex flex-col items-start gap-8 mt-14 px-2">
                <nav>
                  <ul className="flex flex-col items-start gap-4 text-sm text-slate-500">
                    <li>
                      <Link href="/docs">Docs</Link>
                    </li>
                    <li>
                      <Link href="/docs/components/weekly-tracker">
                        Components
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/feedback">Feedback</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <Sidebar
                collapsible="none"
                className="w-64 bg-white dark:bg-black mt-8">
                <SidebarContent className="mt-4 gap-0">
                  <SidebarGroup className="p-0">
                    <SidebarGroupLabel className="text-sm text-neutral-800 dark:text-neutral-100 font-semibold">
                      <Link href="/docs">Getting Started</Link>
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="dark:text-slate-400">
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton asChild>
                            <Link
                              className={`${
                                pathname === "/docs" &&
                                "text-violet-600 dark:text-violet-400"
                              }`}
                              href="/docs">
                              {/* <Download className="mr-2 h-4 w-4" /> */}
                              <span>Introduction</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                    <SidebarGroupLabel className="text-sm text-neutral-800 dark:text-neutral-100 font-semibold">
                      Installation
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="dark:text-slate-400">
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton asChild>
                            <Link
                              className={`${
                                pathname === "/docs/installation/next-js" &&
                                "text-violet-600 dark:text-violet-400 "
                              }`}
                              href="/docs/installation/next-js">
                              {/* <Download className="mr-2 h-4 w-4" /> */}
                              <span>Setup Next.js</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton asChild>
                            <Link
                              className={`${
                                pathname === "/docs/installation/vite" &&
                                "text-violet-600 dark:text-violet-400"
                              }`}
                              href="/docs/installation/vite">
                              {/* <Download className="mr-2 h-4 w-4" /> */}
                              <span>Setup Vite</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton asChild>
                            <Link
                              className={`${
                                pathname ===
                                  "/docs/installation/tailwind-css" &&
                                "text-violet-600 dark:text-violet-400"
                              }`}
                              href="/docs/installation/tailwind-css">
                              {/* <Download className="mr-2 h-4 w-4" /> */}
                              <span>Install Tailwind CSS</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton asChild>
                            <Link
                              className={`${
                                pathname === "/docs/installation/shadcn" &&
                                "text-violet-600 dark:text-violet-400"
                              }`}
                              href="/docs/installation/shadcn">
                              {/* <Download className="mr-2 h-4 w-4" /> */}
                              <span>Install Shadcn</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                  {/* <SidebarSeparator /> */}
                  <SidebarGroup>
                    <SidebarGroupLabel className="text-sm text-neutral-800 dark:text-neutral-100 font-semibold">
                      Components
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="dark:text-slate-400">
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton asChild>
                            <Link
                              className={`${
                                pathname ===
                                  "/docs/components/weekly-tracker" &&
                                "text-violet-600 dark:text-violet-400"
                              }`}
                              href="/docs/components/weekly-tracker">
                              <Calendar className="mr-2 h-4 w-4 " />
                              <span>Weekly Tracker</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton asChild>
                            <Link
                              className={`${
                                pathname ===
                                  "/docs/components/contribution-graph" &&
                                "text-violet-600 dark:text-violet-400"
                              }`}
                              href="/docs/components/contribution-graph">
                              <LayoutGrid className="mr-2 h-4 w-4 " />
                              <span>Github Graph</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton asChild>
                            <Link
                              className={`${
                                pathname === "/docs/components/filter" &&
                                "text-violet-600 dark:text-violet-400"
                              }`}
                              href="/docs/components/filter">
                              <Filter className="mr-2 h-4 w-4 " />
                              <span>Filter</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        {/* <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    className={`${
                      pathname === "/docs/components/sort" && "text-violet-600"
                    }`}
                    href="/docs/components/sort">
                    <SortDesc className="mr-2 h-4 w-4" />
                    <span>Sort</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem> */}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
