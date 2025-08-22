import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Award, Users, GraduationCap, TreePine, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const DonationFormSection = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const donationTiers = [
    {
      amount: 25,
      title: 'Supporter',
      impact: 'Provides school supplies for 1 child for a month',
      icon: Heart
    },
    {
      amount: 50,
      title: 'Advocate',
      impact: 'Funds nutritious meals for 5 children for a week',
      icon: Users
    },
    {
      amount: 100,
      title: 'Champion',
      impact: 'Supports 1 child\'s education for a full month',
      icon: GraduationCap
    },
    {
      amount: 250,
      title: 'Guardian',
      impact: 'Provides healthcare support for 10 families',
      icon: Shield
    },
    {
      amount: 500,
      title: 'Patron',
      impact: 'Plants 100 trees and supports environmental programs',
      icon: TreePine
    },
    {
      amount: 1000,
      title: 'Benefactor',
      impact: 'Sponsors a complete education program for 5 children',
      icon: Award
    }
  ];

  const handleDonation = () => {
    const amount = customAmount || selectedAmount;
    if (!amount || amount <= 0) {
      toast({
        title: "Please select or enter a valid donation amount",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    if (!donorInfo.name || !donorInfo.email) {
      toast({
        title: "Please fill in your name and email address",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    // Store donation info in localStorage
    const donationData = {
      amount: amount,
      recurring: isRecurring,
      donor: donorInfo,
      timestamp: new Date().toISOString()
    };

    const existingDonations = JSON.parse(localStorage.getItem('dzikwa_donations') || '[]');
    existingDonations.push(donationData);
    localStorage.setItem('dzikwa_donations', JSON.stringify(existingDonations));

    toast({
      title: "🚧 Paynow payment integration isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Your donation information has been saved locally for now.",
      duration: 5000,
    });
  };

  const handleInputChange = (field, value) => {
    setDonorInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-light-custom rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-custom mb-4">Choose Your Impact</h2>
            <p className="text-lg text-gray-600">
              Select a donation amount and see the direct impact your generosity will have.
            </p>
          </div>

          {/* Donation Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {donationTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              const isSelected = selectedAmount === tier.amount && !customAmount;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                    isSelected 
                      ? 'border-primary-custom bg-primary-custom/5' 
                      : 'border-gray-200 hover:border-primary-custom/50'
                  }`}
                  onClick={() => {
                    setSelectedAmount(tier.amount);
                    setCustomAmount('');
                  }}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      isSelected ? 'bg-primary-custom text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-dark-custom mb-2">
                      ${tier.amount}
                    </div>
                    <div className="text-primary-custom font-semibold mb-3">
                      {tier.title}
                    </div>
                    <p className="text-sm text-gray-600">
                      {tier.impact}
                    </p>
                    {isSelected && (
                      <div className="mt-3">
                        <Check className="w-5 h-5 text-primary-custom mx-auto" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Custom Amount */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-dark-custom mb-3">
              Or enter a custom amount:
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">$</span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(0);
                }}
                placeholder="Enter amount"
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-primary-custom focus:border-transparent"
              />
            </div>
          </div>

          {/* Recurring Donation */}
          <div className="mb-8">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isRecurring}
                onChange={(e) => setIsRecurring(e.target.checked)}
                className="w-5 h-5 text-primary-custom border-gray-300 rounded focus:ring-primary-custom"
              />
              <span className="text-lg text-dark-custom">
                Make this a monthly recurring donation
              </span>
            </label>
            <p className="text-sm text-gray-600 mt-2 ml-8">
              Recurring donations help us plan long-term programs and create sustainable impact.
            </p>
          </div>

          {/* Donor Information */}
          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-bold text-dark-custom">Your Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-dark-custom mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={donorInfo.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-custom focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-dark-custom mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={donorInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-custom focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-dark-custom mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                value={donorInfo.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-custom focus:border-transparent"
              />
            </div>
          </div>

          {/* Donation Button */}
          <div className="text-center">
            <Button
              onClick={handleDonation}
              size="lg"
              className="bg-primary-custom hover:bg-primary-hover text-white px-12 py-4 text-lg font-semibold donation-pulse"
            >
              Donate ${customAmount || selectedAmount} {isRecurring ? 'Monthly' : 'Now'}
              <Heart className="ml-2 w-5 h-5" />
            </Button>
            
            <p className="text-sm text-gray-600 mt-4">
              Secure payment processing through Paynow. Your donation is tax-deductible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationFormSection;