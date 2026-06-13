const particlePositions = [
  { top: '10%', left: '15%', size: 24, opacity: 0.18 },
  { top: '20%', left: '72%', size: 18, opacity: 0.2 },
  { top: '34%', left: '40%', size: 32, opacity: 0.14 },
  { top: '60%', left: '12%', size: 28, opacity: 0.12 },
  { top: '70%', left: '78%', size: 22, opacity: 0.16 },
  { top: '85%', left: '42%', size: 42, opacity: 0.08 }
];

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(125,211,252,0.08),_transparent_25%)]" />
      {particlePositions.map((particle, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-cyan-400/15 blur-2xl animate-pulse"
          style={{
            width: particle.size,
            height: particle.size,
            top: particle.top,
            left: particle.left,
            opacity: particle.opacity
          }}
        />
      ))}
    </div>
  );
}
