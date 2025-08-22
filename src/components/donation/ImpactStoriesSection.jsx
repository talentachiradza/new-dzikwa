import React from 'react';
import { motion } from 'framer-motion';

const ImpactStoriesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-custom mb-4">
            See Your Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every dollar you donate creates real, measurable change in the lives of individuals and communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
              <img  
                className="w-full h-full object-cover" 
                alt="Young student smiling in classroom"
               src="https://images.unsplash.com/photo-1697906097214-3757ae079b4e" />
            </div>
            <h3 className="text-xl font-bold text-dark-custom mb-3">Education Impact</h3>
            <p className="text-gray-600">
              "Thanks to donors like you, I completed my education and now work as a teacher, giving back to my community."
            </p>
            <p className="text-primary-custom font-semibold mt-2">- Sarah, Program Graduate</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
              <img  
                className="w-full h-full object-cover" 
                alt="Mother with healthy children"
               src="https://images.unsplash.com/photo-1579748294772-fa56d1a0a690" />
            </div>
            <h3 className="text-xl font-bold text-dark-custom mb-3">Health Impact</h3>
            <p className="text-gray-600">
              "The nutrition program helped my children grow healthy and strong. They're now thriving in school."
            </p>
            <p className="text-primary-custom font-semibold mt-2">- Grace, Parent</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
              <img  
                className="w-full h-full object-cover" 
                alt="Young entrepreneur with small business"
               src="https://images.unsplash.com/photo-1691886275771-f037ea78f03e" />
            </div>
            <h3 className="text-xl font-bold text-dark-custom mb-3">Economic Impact</h3>
            <p className="text-gray-600">
              "The entrepreneurship training helped me start my own business. I now employ five people from my community."
            </p>
            <p className="text-primary-custom font-semibold mt-2">- James, Entrepreneur</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStoriesSection;