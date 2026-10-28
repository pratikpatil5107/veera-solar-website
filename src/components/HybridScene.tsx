type Props = { activeStage: number };

/* Hybrid animated SVG scene.
   Components: sun (top-left), solar panels (left), hybrid inverter (center-left),
   battery (center-right, below), building (right), grid (far right).
   Stages (0-indexed): 0: sunlight; 1: panels producing; 2: inverter managing;
   3: battery charging; 4: powering building; 5: grid support & backup.
   Battery charge level changes per stage. */

export default function HybridScene({ activeStage }: Props) {
  const sun = activeStage >= 0;
  const panelsActive = activeStage >= 1;
  const panelToInverter = activeStage >= 1;
  const inverterActive = activeStage >= 2;
  const batteryCharging = activeStage === 3;
  const batteryDischarging = activeStage === 5; // backup mode
  const inverterToBuilding = activeStage >= 4;
  const buildingActive = activeStage >= 4;
  const gridActive = activeStage >= 5;
  const gridOutage = activeStage === 5; // demonstrating outage/backup

  // battery charge levels per stage
  const chargeLevels = [0, 0.05, 0.15, 0.75, 0.6, 0.35];
  const chargeLevel = chargeLevels[activeStage] ?? 0.4;

  return (
    <svg viewBox="0 0 800 440" className="h-full w-full" role="img" aria-label="Animated hybrid solar system diagram">
      <defs>
        <linearGradient id="hy-panel-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a3a6e" />
          <stop offset="100%" stopColor="#0a1f44" />
        </linearGradient>
        <linearGradient id="hy-building-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1b2d52" />
          <stop offset="100%" stopColor="#0a183c" />
        </linearGradient>
        <linearGradient id="hy-battery-grad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>
        <radialGradient id="hy-sun-grad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="60%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#c2932a" stopOpacity="0.3" />
        </radialGradient>
        <filter id="hy-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* === SUN === */}
      {sun && (
        <g transform="translate(80, 65)">
          <circle r="28" fill="url(#hy-sun-grad)" className="solar-sun-core" />
          <circle r="20" fill="#fde047" opacity="0.9" className="solar-sun-core" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = Math.cos(rad) * 30;
            const y1 = Math.sin(rad) * 30;
            const x2 = Math.cos(rad) * (activeStage === 0 ? 54 : 40);
            const y2 = Math.sin(rad) * (activeStage === 0 ? 54 : 40);
            return (
              <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"
                className="solar-sun-ray" strokeDasharray="4 3" opacity={activeStage === 0 ? 0.9 : 0.4} />
            );
          })}
          <text y="48" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700" className="uppercase tracking-wider">Sun</text>
        </g>
      )}

      {/* Sunlight rays to panels */}
      {activeStage <= 1 && sun && (
        <g opacity={activeStage === 0 ? 0.7 : 0.4}>
          <line x1="90" y1="90" x2="130" y2="230" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6 4" className="solar-sun-ray" opacity="0.6" />
          <line x1="110" y1="90" x2="170" y2="230" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6 4" className="solar-sun-ray" opacity="0.6" />
          <line x1="130" y1="90" x2="210" y2="230" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6 4" className="solar-sun-ray" opacity="0.6" />
        </g>
      )}

      {/* === SOLAR PANELS === */}
      <g transform="translate(110, 225)">
        {[0, 1, 2].map((row) => (
          <g key={row} transform={`translate(${row * 40}, 0) rotate(-20)`}>
            <rect width="34" height="52" rx="2" fill="url(#hy-panel-grad)" stroke="#c2932a" strokeWidth="1" opacity="0.9" />
            {[0, 1].map((c) => (
              <line key={`h${c}`} x1="0" y1={c * 26 + 4} x2="34" y2={c * 26 + 4} stroke="#c2932a" strokeWidth="0.4" opacity="0.4" />
            ))}
            {[0, 1, 2].map((c) => (
              <line key={`v${c}`} x1={c * 11 + 4} y1="2" x2={c * 11 + 4} y2="50" stroke="#c2932a" strokeWidth="0.4" opacity="0.4" />
            ))}
            {panelsActive && (
              <rect width="34" height="52" rx="2" fill="#fbbf24" opacity="0.15" className="solar-panel-active" />
            )}
          </g>
        ))}
        <line x1="8" y1="52" x2="8" y2="72" stroke="#475569" strokeWidth="2" />
        <line x1="104" y1="52" x2="104" y2="72" stroke="#475569" strokeWidth="2" />
        <line x1="8" y1="72" x2="104" y2="72" stroke="#475569" strokeWidth="2" />
        <text x="52" y="90" textAnchor="middle" fill={panelsActive ? "#fbbf24" : "#94a3b8"} fontSize="10" fontWeight="700" className="uppercase tracking-wider">Panels</text>
      </g>

      {/* Cable: panels → inverter */}
      <path d="M 190 280 Q 250 280 300 280" fill="none" stroke="#334155" strokeWidth="3" />
      {panelToInverter && (
        <path d="M 190 280 Q 250 280 300 280" fill="none" stroke="#fbbf24" strokeWidth="2.5"
          strokeDasharray="8 6" className="flow-active" filter="url(#hy-glow)" />
      )}

      {/* === HYBRID INVERTER === */}
      <g transform="translate(300, 245)">
        <rect width="64" height="76" rx="6" fill="#1e3a5f" stroke={inverterActive ? "#fbbf24" : "#334155"} strokeWidth="1.5"
          className={inverterActive ? "component-active" : ""} />
        <rect x="6" y="8" width="52" height="22" rx="3" fill="#0a183c" />
        <circle cx="16" cy="19" r="3" fill={inverterActive ? "#fbbf24" : "#334155"} className={inverterActive ? "solar-panel-active" : ""} />
        <circle cx="32" cy="19" r="3" fill={batteryCharging ? "#22c55e" : "#334155"} className={batteryCharging ? "solar-panel-active" : ""} />
        <circle cx="48" cy="19" r="3" fill={inverterToBuilding ? "#22c55e" : "#334155"} />
        <rect x="10" y="38" width="44" height="4" rx="1" fill="#334155" />
        <rect x="10" y="46" width="44" height="4" rx="1" fill="#334155" />
        <rect x="10" y="54" width="32" height="4" rx="1" fill="#334155" />
        <rect x="10" y="62" width="24" height="4" rx="1" fill="#334155" />
        <text x="32" y="94" textAnchor="middle" fill={inverterActive ? "#fbbf24" : "#94a3b8"} fontSize="8" fontWeight="700" className="uppercase tracking-wider">Hybrid Inv.</text>
      </g>

      {/* Cable: inverter → battery (downward) */}
      <path d="M 332 321 L 332 370 L 420 370" fill="none" stroke="#334155" strokeWidth="3" />
      {batteryCharging && (
        <path d="M 332 321 L 332 370 L 420 370" fill="none" stroke="#22c55e" strokeWidth="2.5"
          strokeDasharray="8 6" className="flow-active" filter="url(#hy-glow)" />
      )}
      {batteryDischarging && (
        <path d="M 420 370 L 332 370 L 332 321" fill="none" stroke="#fbbf24" strokeWidth="2.5"
          strokeDasharray="8 6" className="flow-active" filter="url(#hy-glow)" />
      )}

      {/* === BATTERY === */}
      <g transform="translate(420, 330)">
        <rect width="56" height="80" rx="6" fill="#1e3a5f" stroke={batteryCharging || batteryDischarging ? "#fbbf24" : "#334155"} strokeWidth="1.5"
          className={batteryCharging || batteryDischarging ? "component-active" : ""} />
        {/* battery terminal */}
        <rect x="20" y="-6" width="16" height="6" rx="1" fill="#475569" />
        {/* charge level fill */}
        <rect x="8" y="8" width="40" height="64" rx="3" fill="#0a183c" stroke="#334155" strokeWidth="0.5" />
        <rect x="8" y={8 + 64 * (1 - chargeLevel)} width="40" height={64 * chargeLevel} rx="3"
          fill="url(#hy-battery-grad)" opacity="0.85"
          style={{ transition: "y 0.8s ease, height 0.8s ease" }} />
        {/* charge segments */}
        {[0.25, 0.5, 0.75].map((mark) => (
          <line key={mark} x1="8" y1={8 + 64 * (1 - mark)} x2="48" y2={8 + 64 * (1 - mark)}
            stroke="#334155" strokeWidth="0.5" opacity="0.5" />
        ))}
        <text x="28" y="100" textAnchor="middle" fill={batteryCharging || batteryDischarging ? "#fbbf24" : "#94a3b8"} fontSize="9" fontWeight="700" className="uppercase tracking-wider">Battery</text>
        {(batteryCharging || batteryDischarging) && (
          <text x="28" y="-10" textAnchor="middle" fill={batteryCharging ? "#22c55e" : "#fbbf24"} fontSize="8" fontWeight="700">
            {batteryCharging ? "Charging" : "Discharging"}
          </text>
        )}
      </g>

      {/* Cable: inverter → building */}
      <path d="M 364 283 Q 440 283 510 283" fill="none" stroke="#334155" strokeWidth="3" />
      {inverterToBuilding && (
        <path d="M 364 283 Q 440 283 510 283" fill="none" stroke="#fbbf24" strokeWidth="2.5"
          strokeDasharray="8 6" className="flow-active" filter="url(#hy-glow)" />
      )}

      {/* === BUILDING === */}
      <g transform="translate(510, 195)">
        <rect width="100" height="125" rx="4" fill="url(#hy-building-grad)" stroke="#334155" strokeWidth="1.5" />
        <polygon points="0,0 50,-20 100,0" fill="#0f1f42" stroke="#334155" strokeWidth="1" />
        {[0, 1].map((col) =>
          [0, 1, 2].map((row) => (
            <rect key={`w-${col}-${row}`} x={12 + col * 40} y={20 + row * 33} width="24" height="21" rx="2"
              fill={buildingActive ? "#fbbf24" : "#1e3a5f"} stroke="#334155" strokeWidth="0.5"
              className={buildingActive ? "window-lit" : ""} opacity={buildingActive ? undefined : 0.5} />
          ))
        )}
        <rect x="38" y="97" width="22" height="28" rx="1" fill="#0a183c" stroke="#334155" strokeWidth="0.5" />
        <text x="50" y="143" textAnchor="middle" fill={buildingActive ? "#fbbf24" : "#94a3b8"} fontSize="10" fontWeight="700" className="uppercase tracking-wider">Building</text>
      </g>

      {/* Cable: building → grid */}
      <path d="M 610 258 Q 660 258 690 258" fill="none" stroke={gridOutage ? "#ef4444" : "#334155"} strokeWidth="3" strokeDasharray={gridOutage ? "6 4" : undefined} />
      {gridActive && !gridOutage && (
        <path d="M 610 258 Q 660 258 690 258" fill="none" stroke="#fbbf24" strokeWidth="2.5"
          strokeDasharray="8 6" className="flow-active" filter="url(#hy-glow)" />
      )}
      {gridOutage && (
        <text x="650" y="248" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="700">Grid outage</text>
      )}

      {/* === GRID === */}
      <g transform="translate(690, 195)">
        <line x1="0" y1="0" x2="0" y2="125" stroke="#475569" strokeWidth="3" />
        <line x1="-16" y1="20" x2="16" y2="20" stroke="#475569" strokeWidth="2" />
        <line x1="-12" y1="35" x2="12" y2="35" stroke="#475569" strokeWidth="2" />
        <line x1="-16" y1="20" x2="-30" y2="30" stroke={gridOutage ? "#ef4444" : "#334155"} strokeWidth="1.5" opacity={gridOutage ? 0.4 : 1} className={gridActive && !gridOutage ? "grid-line-active" : ""} />
        <line x1="16" y1="20" x2="30" y2="30" stroke={gridOutage ? "#ef4444" : "#334155"} strokeWidth="1.5" opacity={gridOutage ? 0.4 : 1} className={gridActive && !gridOutage ? "grid-line-active" : ""} />
        <line x1="-12" y1="35" x2="-24" y2="45" stroke={gridOutage ? "#ef4444" : "#334155"} strokeWidth="1.5" opacity={gridOutage ? 0.4 : 1} />
        <line x1="12" y1="35" x2="24" y2="45" stroke={gridOutage ? "#ef4444" : "#334155"} strokeWidth="1.5" opacity={gridOutage ? 0.4 : 1} />
        <rect x="-18" y="125" width="36" height="6" rx="1" fill="#334155" />
        <text x="0" y="150" textAnchor="middle" fill={gridActive && !gridOutage ? "#fbbf24" : gridOutage ? "#ef4444" : "#94a3b8"} fontSize="10" fontWeight="700" className="uppercase tracking-wider">Grid</text>
      </g>

      <line x1="20" y1="340" x2="780" y2="340" stroke="#334155" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
