
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProgramsPage from '@/pages/ProgramsPage';
import DonationPage from '@/pages/DonationPage';
import ContactPage from '@/pages/ContactPage';
import ProgramDetailPage from '@/pages/ProgramDetailPage';
import NewsPage from '@/pages/NewsPage';
import NewsDetailPage from '@/pages/NewsDetailPage';
import AdminPage from '@/pages/AdminPage';
import LoginPage from '@/pages/LoginPage';
import BackupPage from '@/pages/BackupPage';
import SuccessStoryPage from '@/pages/SuccessStoryPage';
import GalleryPage from '@/pages/GalleryPage';
import ScrollToTop from '@/components/ScrollToTop';
import BackToTopButton from '@/components/BackToTopButton';
import { AuthProvider } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Helmet>
            <title>Dzikwa Trust - Empowering Communities Through Education & Development</title>
            <meta name="description" content="Dzikwa Trust is dedicated to empowering communities through education, wellbeing programs, and sustainable development initiatives. Join us in making a difference." />
            <meta property="og:title" content="Dzikwa Trust - Empowering Communities Through Education & Development" />
            <meta property="og:description" content="Dzikwa Trust is dedicated to empowering communities through education, wellbeing programs, and sustainable development initiatives. Join us in making a difference." />
            <meta property="og:type" content="website" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          </Helmet>
          
          <Navbar />
          
          <main className="flex-1 pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/programs/:programSlug" element={<ProgramDetailPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:newsSlug" element={<NewsDetailPage />} />
              <Route path="/donate" element={<DonationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/story/:storySlug" element={<SuccessStoryPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              } />
              <Route path="/backup-portal" element={
                <ProtectedRoute>
                  <BackupPage />
                </ProtectedRoute>
              } />

            </Routes>
          </main>
          
          <Chatbot />
          <BackToTopButton />
          <Footer />
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
