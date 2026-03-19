import { Box } from '@mui/material';

const Logo = ({ size = 40, light = true }) => {
  const bg = light ? '#FFF8E8' : '#097C87';
  const primary = light ? '#097C87' : '#FFF8E8';
  const accent = light ? '#FCA47C' : '#FCA47C';

  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: `${size * 0.22}px`,
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
        style={{ width: size * 0.88, height: size * 0.88 }}
      >
        {/* Large bold heart */}
        <path
          d="M20 13 Q20 5 13 5 Q6 5 6 12 Q6 19 20 28 Q34 19 34 12 Q34 5 27 5 Q20 5 20 13Z"
          fill={accent}
        />

        {/* Healthcare cross */}
        <line x1="20" y1="11" x2="20" y2="21" stroke={bg} strokeWidth="2.8" strokeLinecap="round" />
        <line x1="15" y1="16" x2="25" y2="16" stroke={bg} strokeWidth="2.8" strokeLinecap="round" />

        {/* Bold EKG pulse line */}
        <path
          d="M1 33 L9 33 L12.5 28 L16 37 L19.5 31 L23 33 L39 33"
          stroke={primary}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </Box>
  );
};

export default Logo;
