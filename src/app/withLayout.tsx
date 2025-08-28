// app/(with-sidebar)/layout.tsx
import Sidebar from "@/layout-components/sidebar/Sidebar";
import AppProviders from "../AppProvider";

export default function WithSidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full min-h-screen bg-primary.main">
        <AppProviders>{children}</AppProviders>
      </main>
    </div>
  );
}
