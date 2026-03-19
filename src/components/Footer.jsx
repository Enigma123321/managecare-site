import { Box, Container, Typography, Grid, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const footerSections = [
  {
    title: 'Platform',
    links: [
      { label: 'AI Agents', path: '/agents' },
      { label: 'Integrations', path: '/platform' },
      { label: 'Security', path: '/platform' },
      { label: 'Architecture', path: '/platform' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Scheduling', path: '/solutions' },
      { label: 'Care Management', path: '/solutions' },
      { label: 'Referral Management', path: '/solutions' },
      { label: 'Value-Based Care', path: '/solutions' },
    ],
  },
  {
    title: 'Use Cases',
    links: [
      { label: 'Oncology', path: '/use-cases' },
      { label: 'Multi-Specialty', path: '/use-cases' },
      { label: 'Primary Care', path: '/use-cases' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Contact', path: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: '#065A62',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '6px',
                  background: '#FFF8E8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: '#065A62',
                  fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                }}
              >
                M
              </Box>
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                  fontWeight: 400,
                  color: '#FFF8E8',
                  fontSize: '1.4rem',
                }}
              >
                ManageCare
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,248,232,0.7)', maxWidth: 300, mb: 3, lineHeight: 1.7 }}>
              AI-native platform that orchestrates the entire patient journey. From referral to survivorship.
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/demo"
              sx={{
                background: '#FFF8E8',
                color: '#065A62',
                fontWeight: 600,
                '&:hover': { background: '#FFFCF2' },
              }}
            >
              Get Started
            </Button>
          </Grid>

          {footerSections.map((section) => (
            <Grid size={{ xs: 6, sm: 3, md: 2 }} key={section.title}>
              <Typography
                variant="overline"
                sx={{
                  color: 'rgba(255,248,232,0.6)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  display: 'block',
                  mb: 2.5,
                }}
              >
                {section.title}
              </Typography>
              {section.links.map((link) => (
                <Typography
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    display: 'block',
                    color: 'rgba(255,248,232,0.7)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 300,
                    py: 0.5,
                    '&:hover': { color: '#FFF8E8' },
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,248,232,0.08)', my: 5 }} />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,248,232,0.5)', fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} ManageCare. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Privacy Policy', 'Terms of Service', 'HIPAA', 'SOC 2'].map((item) => (
              <Typography
                key={item}
                component="a"
                href="#"
                sx={{
                  color: 'rgba(255,248,232,0.5)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 300,
                  '&:hover': { color: 'rgba(255,248,232,0.6)' },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
