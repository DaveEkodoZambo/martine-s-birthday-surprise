import { motion } from "framer-motion";

const wishes = [
  { t: "Pour ta beauté", d: "Celle qui rayonne autant à l'intérieur qu'à l'extérieur." },
  { t: "Pour ta créativité", d: "Ce don rare de transformer chaque idée en magie." },
  { t: "Pour ta force", d: "Celle qui m'inspire chaque jour à devenir meilleure." },
];

export function Wishes() {
  return (
    <section className="relative w-full px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl text-[var(--cream)] md:text-6xl"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Mes vœux pour toi
        </motion.h3>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {wishes.map((w, i) => (
            <motion.div
              key={w.t}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-white/20 bg-white/5 p-8 text-center backdrop-blur-sm"
            >
              <div className="text-2xl text-[var(--cream)] md:text-3xl" style={{ fontFamily: "var(--font-serif)" }}>
                {w.t}
              </div>
              <p className="mt-4 text-[var(--cream)]/85" style={{ fontFamily: "var(--font-serif)" }}>
                {w.d}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <p className="mx-auto max-w-2xl text-xl italic text-[var(--cream)] md:text-2xl" style={{ fontFamily: "var(--font-serif)" }}>
            « Que cette nouvelle année t'apporte autant de bonheur que tu en donnes autour de toi. Je t'aime fort, ma Martine. »
          </p>
          <p className="mt-8 text-3xl text-[var(--cream)] md:text-4xl" style={{ fontFamily: "var(--font-script)" }}>
            — Adriana 💌
          </p>
        </motion.div>
      </div>
    </section>
  );
}
