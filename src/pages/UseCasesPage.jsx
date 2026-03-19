import {
  Box, Container, Typography, Chip, Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import specialties from '../data/specialties';

const MotionBox = motion.create(Box);

export default function UseCasesPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ pt: { xs: 12, md: 14 }, pb: { xs: 6, md: 10 }, background: '#097C87', position: 'relative' }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}
          >
            <Chip label="By Specialty" sx={{ mb: 2, background: 'rgba(255,248,232,0.15)', border: '1px solid rgba(255,248,232,0.3)', color: '#FFF8E8', fontWeight: 600, py: 2, px: 1 }} />
            <Typography variant="h1" sx={{ color: '#FFF8E8', mb: 2 }}>
              Built for Your{' '}
              <Box component="span" sx={{ color: '#FFFFFF' }}>
                Specialty
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', maxWidth: 700, mx: 'auto', color: 'rgba(255,248,232,0.8)' }}>
              ManageCare adapts to the unique workflows, protocols, and challenges of your specialty. See how practices like yours are transforming their operations.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Specialties List */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          {specialties.map((uc, i) => (
            <MotionBox
              key={uc.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              component={Link}
              to={`/use-cases/${uc.slug}`}
              sx={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: { xs: 'flex-start', md: 'center' },
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 1.5, md: 3 },
                py: { xs: 2.5, md: 3 },
                px: { xs: 2, md: 3 },
                borderBottom: '1px solid rgba(9,124,135,0.1)',
                borderRadius: 2,
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                '&:hover': {
                  background: 'rgba(9,124,135,0.03)',
                  '& .specialty-name': { color: '#097C87' },
                  '& .arrow-icon': {
                    transform: 'translateX(4px)',
                    color: '#097C87',
                  },
                },
              }}
            >
              {/* Specialty name */}
              <Typography
                className="specialty-name"
                sx={{
                  fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                  fontWeight: 700,
                  color: '#065A62',
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                  minWidth: { md: 260 },
                  flexShrink: 0,
                  transition: 'color 0.25s ease',
                  lineHeight: 1.3,
                }}
              >
                {uc.specialty}
              </Typography>

              {/* Tagline */}
              <Typography
                sx={{
                  color: '#065A62',
                  fontSize: '0.92rem',
                  lineHeight: 1.5,
                  flexGrow: 1,
                }}
              >
                {uc.tagline}
              </Typography>

              {/* Key stat + arrow */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  flexShrink: 0,
                }}
              >
                <Box sx={{ textAlign: 'right', display: { xs: 'none', md: 'block' } }}>
                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                      fontWeight: 700,
                      color: '#097C87',
                      fontSize: '1.4rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {uc.results[0].value}
                  </Typography>
                  <Typography sx={{ color: '#065A62', fontSize: '0.7rem', fontWeight: 500 }}>
                    {uc.results[0].label}
                  </Typography>
                </Box>
                <ArrowForwardIcon
                  className="arrow-icon"
                  sx={{
                    fontSize: 22,
                    color: '#FCA47C',
                    transition: 'all 0.25s ease',
                    display: { xs: 'none', md: 'block' },
                  }}
                />
              </Box>
            </MotionBox>
          ))}
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: '#FFF8E8' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ color: '#065A62', mb: 2 }}>Don't See Your Specialty?</Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', maxWidth: 600, mx: 'auto', color: '#065A62' }}>
            ManageCare's platform is specialty-agnostic at its core. We can configure AI agents for any practice workflow. Let's talk about yours.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            component={Link}
            to="/demo"
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '0.95rem',
              background: '#097C87',
              color: '#FFF8E8',
              '&:hover': { background: '#065A62' },
            }}
          >
            Book a Demo
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
