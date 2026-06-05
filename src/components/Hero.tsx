import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export function Hero() {
  const fire = () => {
    const colors = ["#f4a3b4", "#fff1d6", "#e07a5f", "#3a1a0d"];
    const end = Date.now() + 1200;
    (function frame() {
      confetti({ particleCount: 4, angle: 60, spread: 70, origin: { x: 0 }, colors });
      confetti({ particleCount: 4, angle: 120, spread: 70, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-sm uppercase tracking-[0.5em] text-[var(--cream)]/80"
      >
        06 . 26 . 2026
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.2 }}
        className="mt-8 text-6xl leading-none sm:text-8xl md:text-[10rem]"
        style={{ fontFamily: "var(--font-script)" }}
      >
        <span className="shimmer-text">Joyeux</span>
        <br />
        <span className="shimmer-text">Anniversaire</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="mt-8 text-3xl text-[var(--cream)] md:text-5xl"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Martine Tchata
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-6 max-w-xl text-lg italic text-[var(--cream)]/90 md:text-xl"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Un petit voyage à travers nos souvenirs — pour célébrer la femme exceptionnelle que tu es.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={fire}
        className="mt-12 rounded-full bg-[var(--primary)] px-8 py-4 text-base tracking-widest text-[var(--cream)] uppercase shadow-2xl transition-all hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]"
      >
        Clique pour célébrer
      </motion.button>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 text-xs tracking-[0.4em] text-[var(--cream)]/70"
      >
        ↓ FAIS DÉFILER
      </motion.div>
    </section>
  );
}
