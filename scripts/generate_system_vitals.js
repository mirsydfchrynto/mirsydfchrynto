const fs = require('fs');

/**
 * SYSTEM VITALS & TERMINAL GENERATOR V1.0 [NEXUS-E PROTOCOL]
 */

const VITALS = [
    { label: 'ENERGY CORE', value: 100, sub: 'CAFFEINE_OVERLOAD', color: '#00F0FF' },
    { label: 'SLEEP CYCLES', value: 10, sub: 'SYSTEM_DEBT', color: '#FF0055' },
    { label: 'STRESS LOAD', value: 50, sub: 'DEBUGGING_STABLE', color: '#FFCC00' },
    { label: 'PRODUCTIVITY', value: 90, sub: 'OPTIMIZED', color: '#00FF41' }
];

function generateVitalsSVG() {
    return `
<svg width="800" height="200" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes grow { from { width: 0; } }
    .text { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace; fill: #ffffff; }
    .label { font-size: 11px; opacity: 0.6; }
    .sub { font-size: 9px; opacity: 0.4; }
    .value-text { font-size: 12px; font-weight: bold; }
  </style>
  
  <rect width="800" height="200" fill="#0d1117" rx="8" stroke="#30363d"/>
  
  ${VITALS.map((v, i) => `
    <g transform="translate(40, ${40 + (i * 40)})">
      <text x="0" y="0" class="text label">${v.label}</text>
      <text x="720" y="0" class="text sub" text-anchor="end">${v.sub}</text>
      
      <!-- Progress Bar Background -->
      <rect x="0" y="8" width="720" height="6" fill="#161b22" rx="3"/>
      
      <!-- Progress Bar Foreground -->
      <rect x="0" y="8" width="${(v.value / 100) * 720}" height="6" fill="${v.color}" rx="3">
        <animate attributeName="width" from="0" to="${(v.value / 100) * 720}" dur="1.5s" fill="freeze" />
      </rect>
      
      <!-- Glow effect -->
      <rect x="0" y="8" width="${(v.value / 100) * 720}" height="6" fill="${v.color}" rx="3" opacity="0.3" style="filter: blur(2px);"/>
    </g>
  `).join('')}
</svg>
`;
}

function generateTerminalSVG() {
    return `
<svg width="800" height="150" viewBox="0 0 800 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace; font-size: 13px; }
    .prompt { fill: #00FF41; }
    .command { fill: #ffffff; }
    .cursor { fill: #00F0FF; animation: blink 1s step-end infinite; }
    @keyframes blink { 50% { opacity: 0; } }
  </style>

  <rect width="800" height="150" fill="#0d1117" rx="8" stroke="#30363d"/>
  
  <!-- Terminal Header -->
  <rect width="800" height="25" fill="#161b22" rx="8 8 0 0"/>
  <circle cx="15" cy="12.5" r="3" fill="#ff5f56"/>
  <circle cx="27" cy="12.5" r="3" fill="#ffbd2e"/>
  <circle cx="39" cy="12.5" r="3" fill="#27c93f"/>
  <text x="400" y="17" class="text" fill="#8b949e" text-anchor="middle" style="font-size: 10px;">HANDSHAKE_TERMINAL // mirsydfchrynto</text>

  <g transform="translate(20, 50)">
    <text y="0" class="text">
      <tspan class="prompt">$ </tspan><tspan class="command">curl -X GET https://irsyad-architect.surge.sh</tspan>
    </text>
    <text y="25" class="text">
      <tspan class="prompt">$ </tspan><tspan class="command">mailto:irsydfchrynto@gmail.com</tspan>
    </text>
    <text y="50" class="text">
      <tspan class="prompt">$ </tspan><tspan class="command">git commit -m "feat: building future systems"</tspan>
    </text>
    <text y="75" class="text">
      <tspan class="prompt">$ </tspan><tspan class="command">_</tspan><rect x="15" y="-10" width="8" height="15" class="cursor"/>
    </text>
  </g>
</svg>
`;
}

fs.writeFileSync('profile_v12/assets/system_vitals.svg', generateVitalsSVG());
fs.writeFileSync('profile_v12/assets/access_terminal.svg', generateTerminalSVG());
console.log('Modern System SVGs generated successfully.');
