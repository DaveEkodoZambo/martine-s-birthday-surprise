import { motion } from "framer-motion";
import slide2 from "@/assets/slide2.jpeg.asset.json";

export function SlideTwo() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center px-6 py-20">
      <div className="relative w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute left-0 top-0 text-xl tracking-[0.3em] text-[var(--cream)]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Martine
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-0 bottom-0 text-xl tracking-[0.3em] text-[var(--cream)]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Adriana
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto my-16 w-full"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={slide2.url}
              alt="Souvenirs Martine & Adriana"
              className="h-full w-full object-contain"
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center text-5xl text-[var(--cream)] md:text-7xl"
          style={{ fontFamily: "var(--font-script)" }}
        >
          You and me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto mt-6 max-w-md text-center text-sm italic text-[var(--cream)]/85 md:text-base"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          « Les bons amis sont comme les étoiles : on ne les voit pas toujours, mais on sait qu'ils sont toujours là. »
        </motion.p>
      </div>
    </section>
  );
}
