import LeftSidebar from "@/components/LeftSidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
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
          <LeftSidebar />

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
