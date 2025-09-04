// app/(with-sidebar)/layout.tsx
import Sidebar from "@/layout-components/sidebar/Sidebar";
import AppProviders from "../AppProvider";

export default function WithSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-screen overflow-hidden">
       <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>

       <main className="flex-1 overflow-y-auto bg-primary.main">
        <AppProviders>{children}</AppProviders>
      </main>
    </div>
  );
}
