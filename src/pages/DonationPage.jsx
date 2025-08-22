import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import DonationFormSection from '@/components/donation/DonationFormSection';
import TrustIndicatorsSection from '@/components/donation/TrustIndicatorsSection';
import ImpactStoriesSection from '@/components/donation/ImpactStoriesSection';

const DonationPage = () => {
  return (
    <>
      <Helmet>
        <title>Donate - Dzikwa Trust | Make a Difference Today</title>
        <meta name="description" content="Support Dzikwa Trust's mission to empower communities in Zimbabwe. Your donation helps fund education, healthcare, and development programs. Secure Paynow payments." />
        <meta property="og:title" content="Donate - Dzikwa Trust | Make a Difference Today" />
        <meta property="og:description" content="Support Dzikwa Trust's mission to empower communities in Zimbabwe. Your donation helps fund education, healthcare, and development programs. Secure Paynow payments." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary-custom to-yellow-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Make a Difference
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Your donation directly impacts lives, providing education, healthcare, and opportunities for communities across Zimbabwe.
          </motion.p>
        </div>
      </section>

      <DonationFormSection />
      <TrustIndicatorsSection />
      <ImpactStoriesSection />
    </>
  );
};

export default DonationPage;