import { SiteHeader } from "@/components/layouts/site-header";

interface AppLayout {
  children: Readonly<React.ReactNode>;
}

export default async function AppLayout({ children }: AppLayout) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}
