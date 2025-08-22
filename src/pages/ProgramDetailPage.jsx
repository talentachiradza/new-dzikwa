
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { programsData } from '@/components/programs/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Users } from 'lucide-react';

const ProgramDetailPage = () => {
  const { programSlug } = useParams();
  
  const program = programsData
    .flatMap(p => p.subPrograms)
    .find(sp => sp.slug === programSlug);

  if (!program) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
        <h1 className="text-4xl font-bold text-primary-custom mb-4">Program Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">We couldn't find the program you were looking for.</p>
        <Link to="/programs">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Programs
          </Button>
        </Link>
      </div>
    );
  }

  const parentProgram = programsData.find(p => p.subPrograms.some(sp => sp.slug === programSlug));

  return (
    <>
      <Helmet>
        <title>{`${program.title} - Dzikwa Trust`}</title>
        <meta name="description" content={program.description} />
      </Helmet>

      <motion.section 
        className="relative py-32 text-white"
        style={{ backgroundColor: parentProgram.color.replace('bg-', '').split('-')[0] === 'yellow' ? '#f59e0b' : parentProgram.color.replace('bg-', '').split('-')[0] === 'pink' ? '#ec4899' : `var(--color-${parentProgram.color.replace('bg-', '').split('-')[0]})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Link to="/programs" className="text-lg font-semibold opacity-80 hover:opacity-100 transition-opacity">
                    &larr; Back to Programs
                </Link>
            </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mt-4 mb-6"
          >
            {program.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            {program.description}
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 p-8 rounded-xl shadow-md border"
            >
                <h2 className="text-3xl font-bold text-dark-custom mb-6">Program Details</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    {program.details}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-16 text-center"
            >
                <h2 className="text-3xl font-bold text-dark-custom mb-4">
                    Make a Difference Today
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                    Your contribution directly supports this program and helps us create a lasting impact in the community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/donate">
                        <Button size="lg" className="bg-primary-custom hover:bg-primary-hover text-white px-8 py-4 text-lg donation-pulse">
                            Donate to this Program
                            <Heart className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button size="lg" variant="outline" className="border-primary-custom text-primary-custom hover:bg-primary-custom hover:text-white px-8 py-4 text-lg">
                            Volunteer With Us
                            <Users className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProgramDetailPage;
