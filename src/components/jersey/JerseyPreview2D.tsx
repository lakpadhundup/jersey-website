import { JerseyConfig } from '@/data/footballData';

interface JerseyPreview2DProps {
  config: JerseyConfig;
  clubLogo?: string;
  size?: 'small' | 'large';
}

export function JerseyPreview2D({ config, clubLogo, size = 'small' }: JerseyPreview2DProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      className="w-full h-full"
      style={{ filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.4))' }}
    >
      <defs>
        {/* Fabric gradient for realism */}
        <linearGradient id={`fabric-${config.primaryColor}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={config.primaryColor} />
          <stop offset="50%" stopColor={config.primaryColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={config.primaryColor} />
        </linearGradient>
        
        {/* Highlight for 3D effect */}
        <linearGradient id="highlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.1" />
        </linearGradient>

        {/* Shadow for depth */}
        <filter id="innerShadow">
          <feOffset dx="0" dy="1" />
          <feGaussianBlur stdDeviation="1" result="offset-blur" />
          <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
          <feFlood floodColor="black" floodOpacity="0.2" result="color" />
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />
          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>
      </defs>

      {/* Main jersey body */}
      <path
        d="M50 8 
           Q55 9, 60 12 L75 18 
           Q88 28, 88 35 L83 42 Q78 40, 72 38 
           L72 108 Q70 112, 50 112 Q30 112, 28 108 
           L28 38 Q22 40, 17 42 L12 35 
           Q12 28, 25 18 L40 12 Q45 9, 50 8Z"
        fill={`url(#fabric-${config.primaryColor})`}
        filter="url(#innerShadow)"
      />
      
      {/* Highlight overlay */}
      <path
        d="M50 8 
           Q55 9, 60 12 L75 18 
           Q88 28, 88 35 L83 42 Q78 40, 72 38 
           L72 108 Q70 112, 50 112 Q30 112, 28 108 
           L28 38 Q22 40, 17 42 L12 35 
           Q12 28, 25 18 L40 12 Q45 9, 50 8Z"
        fill="url(#highlight)"
      />

      {/* Collar - V-neck style */}
      <path
        d="M42 8 Q50 18, 58 8"
        fill="none"
        stroke={config.secondaryColor}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Shoulder seams */}
      <path d="M40 12 L28 38" fill="none" stroke={config.secondaryColor} strokeWidth="0.5" opacity="0.5" />
      <path d="M60 12 L72 38" fill="none" stroke={config.secondaryColor} strokeWidth="0.5" opacity="0.5" />

      {/* Stripe accents on shoulders */}
      <rect x="25" y="20" width="20" height="2.5" fill={config.accentColor} rx="1" transform="rotate(-25 35 21)" />
      <rect x="55" y="20" width="20" height="2.5" fill={config.accentColor} rx="1" transform="rotate(25 65 21)" />

      {/* Pattern overlay for stripes */}
      {config.pattern === 'stripes' && (
        <>
          <rect x="36" y="18" width="5" height="92" fill={config.secondaryColor} opacity="0.9" />
          <rect x="47.5" y="18" width="5" height="92" fill={config.secondaryColor} opacity="0.9" />
          <rect x="59" y="18" width="5" height="92" fill={config.secondaryColor} opacity="0.9" />
        </>
      )}

      {/* Sleeve cuffs */}
      <path d="M17 40 Q12 35, 17 30" fill="none" stroke={config.secondaryColor} strokeWidth="3" strokeLinecap="round" />
      <path d="M83 40 Q88 35, 83 30" fill="none" stroke={config.secondaryColor} strokeWidth="3" strokeLinecap="round" />

      {/* Bottom hem */}
      <rect x="29" y="106" width="42" height="3" fill={config.secondaryColor} rx="1" />

      {/* Club logo area */}
      {clubLogo && (
        <image
          href={clubLogo}
          x="58"
          y="35"
          width="12"
          height="12"
          preserveAspectRatio="xMidYMid meet"
        />
      )}

      {/* Sponsor area placeholder */}
      <rect x="35" y="50" width="30" height="8" fill={config.secondaryColor} opacity="0.3" rx="2" />
    </svg>
  );
}
