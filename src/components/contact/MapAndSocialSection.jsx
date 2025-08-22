import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const MapAndSocialSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Map Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-dark-custom mb-6">Find Us</h3>
        <div className="aspect-video rounded-lg overflow-hidden mb-6">
         <div className="aspect-video rounded-lg overflow-hidden mb-6">
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d3798.74462813747!2d30.9256375!3d-17.8036951!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1931a7d84dc7ab91%3A0xdd24b5068d4905a!2s3147%20Rujeko%20St%2C%20Harare!3m2!1d-17.8036951!2d30.9282178!5e0!3m2!1sen!2szw!4v1755787743684!5m2!1sen!2szw"
           width="100%"
           height="450"
           style={{ border: 0 }}
           allowFullScreen
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-primary-custom mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-dark-custom">Dzikwa Trust Office</p>
              <p className="text-gray-600 text-sm">3147 Rujeko St, Harare, Zimbabwe</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-primary-custom mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-dark-custom">Office Hours</p>
              <p className="text-gray-600 text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-dark-custom mb-6">Follow Us</h3>
        <p className="text-gray-600 mb-6">
          Stay connected with our latest updates, success stories, and community events.
        </p>
       <div className="flex space-x-4">
  <a
    href="https://www.facebook.com/dzikwatrustfund"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors"
    aria-label="Visit our Facebook page"
  >
    <Facebook className="w-6 h-6 text-blue-600" />
  </a>
  {/* <a
    href="https://www.twitter.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors"
    aria-label="Visit our Twitter page"
  >
    <Twitter className="w-6 h-6 text-blue-600" />
  </a> */}
  <a
    href="https://www.instagram.com/dzikwa_trust_fund"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-200 transition-colors"
    aria-label="Visit our Instagram page"
  >
    <Instagram className="w-6 h-6 text-pink-600" />
  </a>
  <a
    href="https://www.linkedin.com/company/102135222/admin/dashboard"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors"
    aria-label="Visit our LinkedIn page"
  >
    <Linkedin className="w-6 h-6 text-blue-600" />
  </a>
</div>
      </div>
    </motion.div>
  );
};

export default MapAndSocialSection;