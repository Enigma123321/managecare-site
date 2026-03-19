import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AgentsPage from './pages/AgentsPage';
import SolutionsPage from './pages/SolutionsPage';
import PlatformPage from './pages/PlatformPage';
import UseCasesPage from './pages/UseCasesPage';
import PricingPage from './pages/PricingPage';
import DemoPage from './pages/DemoPage';
import CompanyPage from './pages/CompanyPage';
import SpecialtyPage from './pages/SpecialtyPage';
import OutcomePage from './pages/OutcomePage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Box sx={{ minHeight: '100vh', background: '#FFFFFF' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/use-cases/:slug" element={<SpecialtyPage />} />
            <Route path="/outcomes/:slug" element={<OutcomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/demo" element={<DemoPage />} />
          </Routes>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
