export default function DigitalFibres({ color = "#173C31" }: { color?: string }) {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 620" preserveAspectRatio="xMidYMid slice" fill="none">
      <g stroke={color} strokeWidth="0.7" opacity="0.12">
        {Array.from({ length: 13 }, (_, i) => <path key={i} d={`M-80 ${190+i*9} C220 ${100+i*13} 330 ${510+i*4} 660 ${430+i*7} S1100 ${100+i*11} 1510 ${210+i*8}`} />)}
      </g>
      <g fill={color} opacity="0.2"><circle cx="165" cy="264" r="2"/><circle cx="1190" cy="247" r="2"/><circle cx="1058" cy="295" r="1.5"/></g>
    </svg>
  );
}
