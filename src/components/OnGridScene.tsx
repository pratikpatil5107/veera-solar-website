type Props = { activeStage: number };

/* On-Grid animated SVG scene.
   Components: sun (top-left), solar panels (left), grid-tied inverter (center),
   building (right), grid/power lines (far right).
   Energy flows animate based on activeStage (0-indexed):
   0: sunlight only; 1: panels producing; 2: panels→inverter; 3: inverter→building; 4: building↔grid */

export default function OnGridScene({ activeStage }: Props) {
  const sun = activeStage >= 0;
  const panelsActive = activeStage >= 1;
  const panelToInverter = activeStage >= 2;
  const inverterActive = activeStage >= 2;
  const inverterToBuilding = activeStage >= 3;
  const buildingActive = activeStage >= 3;
  const gridActive = activeStage >= 4;

  return (
    <svg viewBox="0 0 800 420" className="h-full w-full" role="img" aria-label="Animated on-grid solar system diagram">
      <defs>
        <linearGradient id="og-panel-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a3a6e" />
          <stop offset="100%" stopColor="#0a1f44" />
        </linearGradient>
        <linearGradient id="og-building-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1b2d52" />
          <stop offset="100%" stopColor="#0a183c" />
        </linearGradient>
        <radialGradient id="og-sun-grad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="60%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#c2932a" stopOpacity="0.3" />
        </radialGradient>
        <filter id="og-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* === SUN === */}
      {sun && (
        <g transform="translate(90, 70)">
          <circle r="30" fill="url(#og-sun-grad)" className="solar-sun-core" />
          <circle r="22" fill="#fde047" opacity="0.9" className="solar-sun-core" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = Math.cos(rad) * 32;
            const y1 = Math.sin(rad) * 32;
            const x2 = Math.cos(rad) * (activeStage === 0 ? 58 : 44);
            const y2 = Math.sin(rad) * (activeStage === 0 ? 58 : 44);
            return (
              <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"
                className="solar-sun-ray" strokeDasharray="4 3" opacity={activeStage === 0 ? 0.9 : 0.4} />
            );
          })}
          <text y="52" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700" className="uppercase tracking-wider">Sun</text>
        </g>
      )}

      {/* Sunlight rays reaching panels (stage 0 & 1) */}
      {activeStage <= 1 && sun && (
        <g opacity={activeStage === 0 ? 0.7 : 0.4}>
          <line x1="100" y1="95" x2="140" y2="240" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6 4" className="solar-sun-ray" opacity="0.6" />
          <line x1="120" y1="95" x2="180" y2="240" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6 4" className="solar-sun-ray" opacity="0.6" />
          <line x1="140" y1="95" x2="220" y2="240" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6 4" className="solar-sun-ray" opacity="0.6" />
        </g>
      )}

      {/* === SOLAR PANELS === */}
      <g transform="translate(120, 230)">
        {[0, 1, 2].map((row) => (
          <g key={row} transform={`translate(${row * 42}, 0) rotate(-20)`}>
            <rect width="36" height="56" rx="2" fill="url(#og-panel-grad)" stroke="#c2932a" strokeWidth="1" opacity="0.9" />
            {/* panel cells */}
            {[0, 1].map((c) => (
              <line key={`h${c}`} x1="0" y1={c * 28 + 4} x2="36" y2={c * 28 + 4} stroke="#c2932a" strokeWidth="0.4" opacity="0.4" />
            ))}
            {[0, 1, 2].map((c) => (
              <line key={`v${c}`} x1={c * 12 + 4} y1="2" x2={c * 12 + 4} y2="54" stroke="#c2932a" strokeWidth="0.4" opacity="0.4" />
            ))}
            {panelsActive && (
              <rect width="36" height="56" rx="2" fill="#fbbf24" opacity="0.15" className="solar-panel-active" />
            )}
          </g>
        ))}
        {/* panel stand */}
        <line x1="10" y1="56" x2="10" y2="78" stroke="#475569" strokeWidth="2" />
        <line x1="110" y1="56" x2="110" y2="78" stroke="#475569" strokeWidth="2" />
        <line x1="10" y1="78" x2="110" y2="78" stroke="#475569" strokeWidth="2" />
        <text x="55" y="98" textAnchor="middle" fill={panelsActive ? "#fbbf24" : "#94a3b8"} fontSize="10" fontWeight="700" className="uppercase tracking-wider">Panels</text>
      </g>

      {/* Cable: panels → inverter */}
      <path id="og-cable-1" d="M 200 285 Q 280 285 340 285" fill="none" stroke="#334155" strokeWidth="3" />
      {panelToInverter && (
        <path d="M 200 285 Q 280 285 340 285" fill="none" stroke="#fbbf24" strokeWidth="2.5"
          strokeDasharray="8 6" className="flow-active" filter="url(#og-glow)" />
      )}

      {/* === GRID-TIED INVERTER === */}
      <g transform="translate(340, 250)">
        <rect width="60" height="70" rx="6" fill="#1e3a5f" stroke={inverterActive ? "#fbbf24" : "#334155"} strokeWidth="1.5"
          className={inverterActive ? "component-active" : ""} />
        <rect x="6" y="8" width="48" height="20" rx="3" fill="#0a183c" />
        <circle cx="16" cy="18" r="3" fill={inverterActive ? "#fbbf24" : "#334155"} className={inverterActive ? "solar-panel-active" : ""} />
        <circle cx="30" cy="18" r="3" fill={inverterActive ? "#22c55e" : "#334155"} />
        <rect x="10" y="36" width="40" height="4" rx="1" fill="#334155" />
        <rect x="10" y="44" width="40" height="4" rx="1" fill="#334155" />
        <rect x="10" y="52" width="28" height="4" rx="1" fill="#334155" />
        <text x="30" y="88" textAnchor="middle" fill={inverterActive ? "#fbbf24" : "#94a3b8"} fontSize="9" fontWeight="700" className="uppercase tracking-wider">Inverter</text>
      </g>

      {/* Cable: inverter → building */}
      <path id="og-cable-2" d="M 400 285 Q 480 285 540 285" fill="none" stroke="#334155" strokeWidth="3" />
      {inverterToBuilding && (
        <path d="M 400 285 Q 480 285 540 285" fill="none" stroke="#fbbf24" strokeWidth="2.5"
          strokeDasharray="8 6" className="flow-active" filter="url(#og-glow)" />
      )}

      {/* === BUILDING === */}
      <g transform="translate(540, 200)">
        <rect width="100" height="120" rx="4" fill="url(#og-building-grad)" stroke="#334155" strokeWidth="1.5" />
        {/* roof */}
        <polygon points="0,0 50,-20 100,0" fill="#0f1f42" stroke="#334155" strokeWidth="1" />
        {/* windows */}
        {[0, 1].map((col) =>
          [0, 1, 2].map((row) => (
            <rect key={`w-${col}-${row}`} x={12 + col * 40} y={20 + row * 32} width="24" height="20" rx="2"
              fill={buildingActive ? "#fbbf24" : "#1e3a5f"} stroke="#334155" strokeWidth="0.5"
              className={buildingActive ? "window-lit" : ""} opacity={buildingActive ? undefined : 0.5} />
          ))
        )}
        {/* door */}
        <rect x="38" y="92" width="22" height="28" rx="1" fill="#0a183c" stroke="#334155" strokeWidth="0.5" />
        <text x="50" y="138" textAnchor="middle" fill={buildingActive ? "#fbbf24" : "#94a3b8"} fontSize="10" fontWeight="700" className="uppercase tracking-wider">Building</text>
      </g>

      {/* Cable: building → grid */}
      <path id="og-cable-3" d="M 640 260 Q 690 260 720 260" fill="none" stroke="#334155" strokeWidth="3" />
      {gridActive && (
        <path d="M 640 260 Q 690 260 720 260" fill="none" stroke="#fbbf24" strokeWidth="2.5"
          strokeDasharray="8 6" className="flow-active" filter="url(#og-glow)" />
      )}

      {/* === GRID / POWER LINES === */}
      <g transform="translate(720, 200)">
        {/* power pole */}
        <line x1="0" y1="0" x2="0" y2="120" stroke="#475569" strokeWidth="3" />
        <line x1="-16" y1="20" x2="16" y2="20" stroke="#475569" strokeWidth="2" />
        <line x1="-12" y1="35" x2="12" y2="35" stroke="#475569" strokeWidth="2" />
        {/* wires */}
        <line x1="-16" y1="20" x2="-30" y2="30" stroke="#334155" strokeWidth="1.5" className={gridActive ? "grid-line-active" : ""} />
        <line x1="16" y1="20" x2="30" y2="30" stroke="#334155" strokeWidth="1.5" className={gridActive ? "grid-line-active" : ""} />
        <line x1="-12" y1="35" x2="-24" y2="45" stroke="#334155" strokeWidth="1.5" className={gridActive ? "grid-line-active" : ""} />
        <line x1="12" y1="35" x2="24" y2="45" stroke="#334155" strokeWidth="1.5" className={gridActive ? "grid-line-active" : ""} />
        {/* grid base */}
        <rect x="-18" y="120" width="36" height="6" rx="1" fill="#334155" />
        <text x="0" y="145" textAnchor="middle" fill={gridActive ? "#fbbf24" : "#94a3b8"} fontSize="10" fontWeight="700" className="uppercase tracking-wider">Grid</text>
      </g>

      {/* Ground line */}
      <line x1="20" y1="330" x2="780" y2="330" stroke="#334155" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
