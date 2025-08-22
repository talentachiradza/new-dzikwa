import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const StaffContactsSection = () => {
  const staffContacts = [
    {
      name: 'Seppo Ainamo',
      position: 'Founder',
      email: 'dzikwatrust@africaonline.co.zw',
      phone: '+263 772 210855 or +358 40 7211405',
      image: 'https://i.imgur.com/Fn18n8O.jpg'
    },
    {
      name: 'Oili Wuolle',
      position: 'Programs Director',
      email: 'dzikwatrust@africaonline.co.zw',
      phone: '+263 772 403485 or +358 40 5922543',
      image: 'https://i.imgur.com/Gpol2E7.jpg'
    },
    {
      name: 'Priscilla Takawira',
      position: 'Dzikwa Trust Manager',
      email: 'dzikwatrust@africaonline.co.zw',
      phone: '+263 242 217455 or +263 772 40 9519',
      image: 'https://i.imgur.com/6guZW72.jpg'
    }
  ];

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
            Key Staff Contacts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach out directly to our team members for specific inquiries or program information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staffContacts.map((staff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-light-custom rounded-xl p-6 text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                <img  
                  className="w-full h-full object-cover" 
                  alt={`Portrait of ${staff.name}`}
                 src={staff.image} />
              </div>
              <h3 className="text-xl font-bold text-dark-custom mb-2">{staff.name}</h3>
              <p className="text-primary-custom font-semibold mb-4">{staff.position}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{staff.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{staff.phone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffContactsSection;