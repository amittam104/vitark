import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Calendar, GitGraph, Filter, SortDesc, Download } from "lucide-react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div>
        <div className="flex justify-between w-screen overflow-hidden">
          {/* Left Sidebar */}
          <Sidebar
            collapsible="none"
            className="w-64 border mx-4 bg-white rounded-lg">
            <SidebarHeader></SidebarHeader>
            <SidebarContent className="ml-4">
              <SidebarGroup>
                <SidebarGroupLabel className="text-sm text-neutral-800 font-semibold">
                  Introduction
                </SidebarGroupLabel>
                <SidebarGroupLabel className="text-sm text-neutral-800 font-semibold">
                  Installation
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href="/docs">
                          {/* <Download className="mr-2 h-4 w-4" /> */}
                          <span>Setup Next.js</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href="/docs">
                          {/* <Download className="mr-2 h-4 w-4" /> */}
                          <span>Setup Vite</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href="/docs">
                          {/* <Download className="mr-2 h-4 w-4" /> */}
                          <span>Install Tailwind CSS</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href="/docs">
                          {/* <Download className="mr-2 h-4 w-4" /> */}
                          <span>Install Shadcn</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarSeparator />
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href="#week-tracker">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>Week Tracker</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href="#github-graph">
                          <GitGraph className="mr-2 h-4 w-4" />
                          <span>Github Graph</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href="#filter">
                          <Filter className="mr-2 h-4 w-4" />
                          <span>Filter</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a href="#sort">
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
          <Sidebar collapsible="none" className="w-64 border mx-4" side="right">
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
