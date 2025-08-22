import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import ContactFormSection from '@/components/contact/ContactFormSection';
import MapAndSocialSection from '@/components/contact/MapAndSocialSection';
import StaffContactsSection from '@/components/contact/StaffContactsSection';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Dzikwa Trust | Get in Touch</title>
        <meta name="description" content="Contact Dzikwa Trust for inquiries about our programs, volunteer opportunities, or donations. Located in Harare, Zimbabwe. Multiple ways to reach us." />
        <meta property="og:title" content="Contact Us - Dzikwa Trust | Get in Touch" />
        <meta property="og:description" content="Contact Dzikwa Trust for inquiries about our programs, volunteer opportunities, or donations. Located in Harare, Zimbabwe. Multiple ways to reach us." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary-custom to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            We'd love to hear from you. Reach out for inquiries, volunteer opportunities, or to learn more about our programs.
          </motion.p>
        </div>
      </section>

      <ContactInfoSection />

      {/* Contact Form and Map */}
      <section className="py-20 bg-light-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactFormSection />
            <MapAndSocialSection />
          </div>
        </div>
      </section>

      <StaffContactsSection />
    </>
  );
};

export default ContactPage;