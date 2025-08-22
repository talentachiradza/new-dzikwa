import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ProgramHighlights from '@/components/home/ProgramHighlights';
import SuccessStories from '@/components/home/SuccessStories';
import LatestNewsSection from '@/components/home/LatestNewsSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import CallToAction from '@/components/home/CallToAction';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Dzikwa Trust - Empowering Communities Through Education & Development</title>
        <meta name="description" content="Join Dzikwa Trust in transforming lives through education, wellbeing programs, and sustainable development. Over 15 years of community impact in Zimbabwe." />
        <meta property="og:title" content="Dzikwa Trust - Empowering Communities Through Education & Development" />
        <meta property="og:description" content="Join Dzikwa Trust in transforming lives through education, wellbeing programs, and sustainable development. Over 15 years of community impact in Zimbabwe." />
      </Helmet>

      <HeroSection />
      <div className="relative z-10 bg-white">
        <StatsSection />
        <ProgramHighlights />
        <SuccessStories />
        <LatestNewsSection />
      </div>
      <NewsletterSection />
      <CallToAction />
    </>
  );
};

export default HomePage;