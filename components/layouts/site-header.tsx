import { siteConfig } from "@/config/site";
import { MainNav } from "@/components/layouts/main-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-slate-600">
      <div className="container flex h-16 items-center">
        <MainNav items={siteConfig.mainNav} />
      </div>
    </header>
  );
}
