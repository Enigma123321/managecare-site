import { Box } from '@mui/material';

const Logo = ({ size = 40, light = true }) => {
  const bg = light ? '#FFF8E8' : '#097C87';
  const primary = light ? '#097C87' : '#FFF8E8';
  const accent = light ? '#065A62' : '#FCA47C';
  const light2 = light ? '#065A62' : '#FFF8E8';

  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: `${size * 0.2}px`,
        background: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size * 0.72, height: size * 0.72 }}
      >
        {/* Patient journey path — flowing curve through waypoints */}
        <path
          d="M4 32 Q10 32 12 26 Q14 20 20 20 Q26 20 28 14 Q30 8 36 8"
          stroke={light2}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />

        {/* Journey waypoint nodes */}
        <circle cx="4" cy="32" r="2.5" fill={accent} />
        <circle cx="12" cy="26" r="2" fill={accent} opacity="0.7" />
        <circle cx="20" cy="20" r="3" fill={primary} />
        <circle cx="28" cy="14" r="2" fill={accent} opacity="0.7" />
        <circle cx="36" cy="8" r="2.5" fill={accent} />

        {/* Central hub — healthcare cross on center node */}
        <line x1="20" y1="16.5" x2="20" y2="23.5" stroke={bg} strokeWidth="2" strokeLinecap="round" />
        <line x1="16.5" y1="20" x2="23.5" y2="20" stroke={bg} strokeWidth="2" strokeLinecap="round" />

        {/* Branching connections from center — care coordination */}
        <line x1="20" y1="20" x2="10" y2="12" stroke={primary} strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
        <line x1="20" y1="20" x2="30" y2="28" stroke={primary} strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
        <line x1="20" y1="20" x2="8" y2="22" stroke={primary} strokeWidth="1.2" strokeLinecap="round" opacity="0.25" />
        <line x1="20" y1="20" x2="32" y2="18" stroke={primary} strokeWidth="1.2" strokeLinecap="round" opacity="0.25" />

        {/* Small satellite nodes — connected services */}
        <circle cx="10" cy="12" r="1.5" fill={light2} opacity="0.6" />
        <circle cx="30" cy="28" r="1.5" fill={light2} opacity="0.6" />
        <circle cx="8" cy="22" r="1.2" fill={light2} opacity="0.4" />
        <circle cx="32" cy="18" r="1.2" fill={light2} opacity="0.4" />
      </svg>
    </Box>
  );
};

export default Logo;
