const COLORS = ["#f4a3b4", "#f7c8a0", "#fff1d6", "#e07a5f", "#c9aacf"];

export function Balloons({ count = 14 }: { count?: number }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 97) % 100;
        const size = 28 + ((i * 13) % 30);
        const color = COLORS[i % COLORS.length];
        const dur = 12 + ((i * 7) % 10);
        const delay = (i * 1.6) % 12;
        const drift = ((i * 31) % 80) - 40;
        const spin = ((i * 11) % 30) - 15;
        return (
          <div
            key={i}
            className="balloon absolute"
            style={
              {
                left: `${left}%`,
                width: size,
                "--dur": `${dur}s`,
                "--delay": `${delay}s`,
                "--drift": `${drift}px`,
                "--spin": `${spin}deg`,
              } as React.CSSProperties
            }
          >
            <div
              className="rounded-full shadow-lg"
              style={{
                width: size,
                height: size * 1.2,
                background: `radial-gradient(circle at 30% 30%, ${color}, ${color}cc 60%, ${color}88)`,
              }}
            />
            <div className="mx-auto h-10 w-px bg-white/40" />
          </div>
        );
      })}
    </div>
  );
}
