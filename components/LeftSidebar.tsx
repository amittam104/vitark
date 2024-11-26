"use client";

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
import { Calendar, Filter, LayoutGrid, SortDesc } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function LeftSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="none" className="w-64  mx-4 bg-white ">
      <SidebarContent className="mt-4 gap-0">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm text-neutral-800 font-semibold">
            <Link href="/docs">Getting Started</Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    className={`${pathname === "/docs" && "text-violet-600"}`}
                    href="/docs">
                    {/* <Download className="mr-2 h-4 w-4" /> */}
                    <span>Introduction</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel className="text-sm text-neutral-800 font-semibold">
            Installation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    className={`${
                      pathname === "/docs/installation/next-js" &&
                      "text-violet-600"
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
                      "text-violet-600"
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
                      pathname === "/docs/installation/tailwind-css" &&
                      "text-violet-600"
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
                      "text-violet-600"
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
          <SidebarGroupLabel className="text-sm text-neutral-800 font-semibold">
            Components
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    className={`${
                      pathname === "/docs/components/weekly-tracker" &&
                      "text-violet-600"
                    }`}
                    href="/docs/components/weekly-tracker">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Weekly Tracker</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    className={`${
                      pathname === "/docs/components/contribution-graph" &&
                      "text-violet-600"
                    }`}
                    href="/docs/components/contribution-graph">
                    <LayoutGrid className="mr-2 h-4 w-4" />
                    <span>Github Graph</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    className={`${
                      pathname === "/docs/components/filter" &&
                      "text-violet-600"
                    }`}
                    href="/docs/components/filter">
                    <Filter className="mr-2 h-4 w-4" />
                    <span>Filter</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
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
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default LeftSidebar;
