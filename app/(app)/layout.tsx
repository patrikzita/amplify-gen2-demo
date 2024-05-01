import { SiteHeader } from "@/components/layouts/site-header";
import { ReactNode } from "react";

interface AppLayoutProps {
  children: Readonly<ReactNode>;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}
