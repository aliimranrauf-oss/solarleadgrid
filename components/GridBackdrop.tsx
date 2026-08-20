export default function GridBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full opacity-[0.10]" preserveAspectRatio="none">
        <defs>
          <pattern id="grid-lattice" width="72" height="72" patternUnits="userSpaceOnUse">
            <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#6E9CB8" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-lattice)" />
      </svg>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="absolute h-1.5 w-1.5 animate-travel rounded-full bg-solar"
          style={{
            top: `${15 + i * 18}%`,
            left: "-4px",
            animationDelay: `${i * 1.4}s`,
            boxShadow: "0 0 8px 2px rgba(255,182,39,0.7)",
          }}
        />
      ))}
    </div>
  );
}
