import { Hero } from "@/components/Hero";
import { SlideOne } from "@/components/SlideOne";
import { SlideTwo } from "@/components/SlideTwo";
import { Wishes } from "@/components/Wishes";
import { Balloons } from "@/components/Balloons";

export default function App() {
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
