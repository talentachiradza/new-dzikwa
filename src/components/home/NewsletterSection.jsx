import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const NewsletterSection = () => {
  const { toast } = useToast();

  const handleNewsletterSignup = () => {
    toast({
      title: "🚧 Newsletter signup isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 4000,
    });
  };

  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Connected With Our Mission
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get updates on our programs, success stories, and ways you can make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-[10px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <Button 
              onClick={handleNewsletterSignup}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-[10px]"
            >
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;