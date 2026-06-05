import { motion } from "framer-motion";
import slide1 from "@/assets/slide1.jpeg.asset.json";

export function SlideOne() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center px-6 py-20">
      <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          <div className="text-[110px] leading-none font-light text-[var(--cream)]" style={{ fontFamily: "var(--font-serif)" }}>
            22
          </div>
          <p className="mt-4 max-w-[14rem] text-base text-[var(--cream)]/90 md:text-lg mx-auto md:mx-0" style={{ fontFamily: "var(--font-serif)" }}>
            Officiellement 22 ans de Masterclass. Et c'est loin d'être fini.
          </p>
        </motion.div>

        {/* Center photo with title arching over */}
        <div className="order-1 relative md:order-2">
          <motion.h1
            initial={{ opacity: 0, y: -30, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, y: 0, letterSpacing: "0.05em" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute -top-10 left-1/2 z-20 w-[140%] -translate-x-1/2 whitespace-nowrap text-center text-3xl text-[var(--primary)] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Birthday Girl
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-[220px] sm:w-[280px] md:w-[320px]"
          >
            <div className="border-[6px] border-white/95 shadow-2xl">
              <img src={slide1.url} alt="Martine" className="block w-full grayscale" />
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="order-3 text-center md:text-left"
        >
          <div className="text-3xl text-[var(--cream)] md:text-4xl" style={{ fontFamily: "var(--font-serif)" }}>
            Martine
          </div>
          <div className="mt-1 text-2xl tracking-[0.2em] text-[var(--cream)] md:text-3xl" style={{ fontFamily: "var(--font-serif)" }}>
            TCHATA
          </div>
          <div className="mt-10 space-y-1 text-lg text-[var(--cream)]/95 md:text-xl" style={{ fontFamily: "var(--font-serif)" }}>
            <div>Beauty</div>
            <div>Creativity</div>
            <div>Strength</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-8 text-sm tracking-widest text-[var(--cream)]/80">
        06.26.2026
      </div>
    </section>
  );
}
