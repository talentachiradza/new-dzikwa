
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const [stats, setStats] = useState({
    children: 0,
    years: 0,
    programs: 0,
    volunteers: 0
  });

  // Animate counters
  useEffect(() => {
    const targets = { children: 1250, years: 30, nutrition: 1861663, trees: 136000 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const intervals = Object.keys(targets).map(key => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
          return;
        }
        setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-primary-custom stats-counter mb-2">
              {stats.children.toLocaleString()}+
            </div>
            <p className="text-gray-600 font-medium">Children Helped</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-primary-custom stats-counter mb-2">
              {stats.years}+
            </div>
            <p className="text-gray-600 font-medium">Years Operating</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-primary-custom stats-counter mb-2">
              {stats.nutrition}+
            </div>
            <p className="text-gray-600 font-medium">Nutrition Provided</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-primary-custom stats-counter mb-2">
              {stats.trees}+
            </div>
            <p className="text-gray-600 font-medium">Trees Planted</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
