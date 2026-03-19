import { Box } from '@mui/material';

const Logo = ({ size = 40, light = true }) => {
  const primary = light ? '#F8FAFB' : '#097C87';
  const accent = '#FCA47C';

  // Scale font size relative to the size prop
  const fontSize = size * 0.55;

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        flexShrink: 0,
        fontFamily: '"DM Sans Variable", "DM Sans", sans-serif',
        fontWeight: 800,
        fontSize: `${fontSize}px`,
        letterSpacing: '-0.04em',
        lineHeight: 1,
        userSelect: 'none',
      }}
    >
      <span style={{ color: primary }}>Manage</span>
      <span style={{ color: accent }}>Care</span>
    </Box>
  );
};

export default Logo;
