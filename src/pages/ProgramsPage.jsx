import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { GraduationCap, Heart, Users, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProgramSearch from '@/components/programs/ProgramSearch';
import ProgramList from '@/components/programs/ProgramList';
import { programsData } from '@/components/programs/data';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ProgramsPage = () => {
  const [expandedProgram, setExpandedProgram] = useState(null);
  const query = useQuery();
  const [searchQuery, setSearchQuery] = useState(query.get('q') || '');

  useEffect(() => {
    setSearchQuery(query.get('q') || '');
  }, [query]);

  const toggleProgram = (programId) => {
    setExpandedProgram(prev => (prev === programId ? null : programId));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  const filteredPrograms = useMemo(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    if (!lowercasedQuery) {
      return programsData;
    }
    
    const results = programsData.map(program => {
      const isProgramMatch = program.title.toLowerCase().includes(lowercasedQuery);
      
      const matchingSubPrograms = program.subPrograms.filter(sub => 
        sub.title.toLowerCase().includes(lowercasedQuery) ||
        sub.description.toLowerCase().includes(lowercasedQuery) ||
        sub.details.toLowerCase().includes(lowercasedQuery)
      );

      if (isProgramMatch || matchingSubPrograms.length > 0) {
        return { 
            ...program, 
            subPrograms: isProgramMatch && matchingSubPrograms.length === 0 ? program.subPrograms : matchingSubPrograms
        };
      }
      return null;
    }).filter(Boolean);

    if (results.length > 0 && expandedProgram === null) {
      setExpandedProgram(results[0].id);
    } else if (results.length === 0) {
      setExpandedProgram(null);
    }
    
    return results;
  }, [searchQuery]);


  return (
    <>
      <Helmet>
        <title>Our Programs - Dzikwa Trust | Education, Wellbeing & Development</title>
        <meta name="description" content="Explore Dzikwa Trust's comprehensive programs in education, wellbeing, talent development, and environmental conservation. Making a difference across Zimbabwe." />
        <meta property="og:title" content="Our Programs - Dzikwa Trust | Education, Wellbeing & Development" />
        <meta property="og:description" content="Explore Dzikwa Trust's comprehensive programs in education, wellbeing, talent development, and environmental conservation. Making a difference across Zimbabwe." />
      </Helmet>

      <section className="relative py-32 bg-gradient-to-r from-primary-custom to-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Comprehensive initiatives designed to empower communities and create lasting positive change across Zimbabwe.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-custom mb-4">
              Our Core Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use the search bar below to find specific programs or browse our key impact areas.
            </p>
          </motion.div>
          
          <ProgramSearch searchQuery={searchQuery} onSearchChange={handleSearchChange} />
          <ProgramList programs={filteredPrograms} expandedProgram={expandedProgram} onToggle={toggleProgram} />

        </div>
      </section>

      <section className="py-20 bg-light-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-custom mb-4">
              Program Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real numbers showing the difference our programs make in communities across Zimbabwe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-dark-custom mb-2">6000+</div>
              <p className="text-gray-600">Students Supported</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-dark-custom mb-2">95%</div>
              <p className="text-gray-600">Pass rate</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-dark-custom mb-2">10+</div>
              <p className="text-gray-600">Schools Partnered</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-8 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-dark-custom mb-2">175+</div>
              <p className="text-gray-600">Graduates</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Your support helps us expand these vital programs and reach more communities in need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/donate">
                    <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg donation-pulse">
                        Support Our Programs
                        <Heart className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
                <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
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

export default ProgramsPage;