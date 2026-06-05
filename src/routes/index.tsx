import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { SlideOne } from "@/components/SlideOne";
import { SlideTwo } from "@/components/SlideTwo";
import { Wishes } from "@/components/Wishes";
import { Balloons } from "@/components/Balloons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joyeux Anniversaire Martine 🎂" },
      { name: "description", content: "Un hommage de la part d'Adriana pour les 22 ans de Martine Tchata." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Dancing+Script:wght@500;700&family=Caveat:wght@500;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Balloons />
      <div className="relative z-10">
        <Hero />
        <SlideOne />
        <SlideTwo />
        <Wishes />
        <footer className="py-8 text-center text-xs tracking-widest text-[var(--cream)]/60">
          Made with ♥ by Adriana — 26.06.2026
        </footer>
      </div>
    </main>
  );
}
