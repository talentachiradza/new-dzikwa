import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Award } from 'lucide-react';

const TrustIndicatorsSection = () => {
  return (
    <section className="py-20 bg-light-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-custom mb-4">
            Your Trust Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We maintain the highest standards of transparency and accountability in all our operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 text-center shadow-lg"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-dark-custom mb-4">Secure Payments</h3>
            <p className="text-gray-600">
              All donations are processed through secure Paynow payment gateway with bank-level encryption.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl p-8 text-center shadow-lg"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-dark-custom mb-4">Transparency Rating</h3>
            <p className="text-gray-600">
              We maintain an A+ transparency rating with 88% of funds going directly to programs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 text-center shadow-lg"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-dark-custom mb-4">Tax Deductible</h3>
            <p className="text-gray-600">
              Your donation is tax-deductible. We'll provide you with a receipt for your records.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicatorsSection;