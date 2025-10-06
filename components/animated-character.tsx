export function AnimatedCharacter() {
  return (
    <div className="mx-auto h-32 w-32 animate-bounce md:h-40 md:w-40" aria-hidden="true">
      <svg
        viewBox="0 0 200 200"
        role="img"
        aria-label="Friendly waving character"
        className="h-full w-full text-primary"
      >
        {/* Head */}
        <circle cx="100" cy="60" r="30" fill="currentColor" />
        {/* Body */}
        <rect x="80" y="90" width="40" height="60" rx="8" fill="currentColor" opacity="0.85" />
        {/* Left arm */}
        <rect x="45" y="95" width="30" height="12" rx="6" fill="currentColor" opacity="0.85" />
        {/* Right arm (waving) */}
        <g className="origin-[150px_101px] animate-pulse">
          <rect x="125" y="95" width="30" height="12" rx="6" fill="currentColor" opacity="0.85" />
        </g>
        {/* Legs */}
        <rect x="85" y="150" width="12" height="30" rx="6" fill="currentColor" opacity="0.85" />
        <rect x="103" y="150" width="12" height="30" rx="6" fill="currentColor" opacity="0.85" />
      </svg>
    </div>
  )
}
