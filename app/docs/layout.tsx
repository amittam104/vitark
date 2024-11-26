import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Calendar, Filter, LayoutGrid, SortDesc } from "lucide-react";
import Link from "next/link";
import * as React from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="w-full">
        <div className="flex justify-between w-full overflow-hidden">
          {/* Left Sidebar */}
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
                        <a href="/docs">
                          {/* <Download className="mr-2 h-4 w-4" /> */}
                          <span>Introduction</span>
                        </a>
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
                        <a href="/docs/installation/next-js">
                          {/* <Download className="mr-2 h-4 w-4" /> */}
                          <span>Setup Next.js</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href="/docs/installation/vite">
                          {/* <Download className="mr-2 h-4 w-4" /> */}
                          <span>Setup Vite</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href="/docs/installation/tailwind-css">
                          {/* <Download className="mr-2 h-4 w-4" /> */}
                          <span>Install Tailwind CSS</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href="/docs/installation/shadcn">
                          {/* <Download className="mr-2 h-4 w-4" /> */}
                          <span>Install Shadcn</span>
                        </a>
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
                        <a href="/docs/components/weekly-tracker">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>Week Tracker</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href="/docs/components/contribution-graph">
                          <LayoutGrid className="mr-2 h-4 w-4" />
                          <span>Github Graph</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href="/docs/components/filter">
                          <Filter className="mr-2 h-4 w-4" />
                          <span>Filter</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href="/docs/components/sort">
                          <SortDesc className="mr-2 h-4 w-4" />
                          <span>Sort</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <main className="flex-1 overflow-auto p-4">{children}</main>

          {/* Right Sidebar */}
          <Sidebar
            collapsible="none"
            className="w-64 mx-4 bg-white"
            side="right">
            <SidebarHeader className="h-14">
              <div className="p-4 text-sm font-medium">On this page</div>
            </SidebarHeader>
            <SidebarContent>
              {/* Right sidebar content goes here */}
            </SidebarContent>
          </Sidebar>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default layout;
