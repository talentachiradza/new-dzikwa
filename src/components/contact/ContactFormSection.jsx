import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    // Store contact form submission in localStorage
    const contactData = {
      ...formData,
      timestamp: new Date().toISOString()
    };

    const existingContacts = JSON.parse(localStorage.getItem('dzikwa_contacts') || '[]');
    existingContacts.push(contactData);
    localStorage.setItem('dzikwa_contacts', JSON.stringify(existingContacts));

    toast({
      title: "🚧 Contact form submission isn't fully implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Your message has been saved locally for now.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-dark-custom mb-6">Send us a Message</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-dark-custom mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-custom focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-dark-custom mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-custom focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-dark-custom mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-custom focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-dark-custom mb-2">
                Inquiry Type
              </label>
              <select
                value={formData.inquiryType}
                onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-custom focus:border-transparent"
              >
                <option value="general">General Inquiry</option>
                <option value="volunteer">Volunteer Opportunity</option>
                <option value="donation">Donation Information</option>
                <option value="partnership">Partnership</option>
                <option value="media">Media Inquiry</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-dark-custom mb-2">
              Subject
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              placeholder="Enter message subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-custom focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-dark-custom mb-2">
              Message *
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Enter your message"
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-custom focus:border-transparent resize-none"
              required
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary-custom hover:bg-primary-hover text-white py-3 text-lg font-semibold"
          >
            Send Message
            <Send className="ml-2 w-5 h-5" />
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactFormSection;