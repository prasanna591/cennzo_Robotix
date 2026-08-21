import { SiteHeader } from "@/components/navigation/site-header";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
      </main>
    </>
  );
}
