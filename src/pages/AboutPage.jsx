import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Users, Target, Award, Heart, Calendar } from 'lucide-react';

const AboutPage = () => {
  const timelineEvents = [
    {
      year: "1993",
      title: "Foundation",
      description: " Dzikwa Trust is a non-profit organization founded in 1993 that supports vulnerable children in Dzivarasekwa, Zimbabwe, providing them with education, healthcare, food, and extracurricular activities."
    },
    {
      year: "2002",
      title: "First Education Center",
      description: "The Dzikwa Trust First Education Center, referred to as the Dzikwa Centre, is a facility in Dzivarasekwa, Zimbabwe, that serves as a hub for educational, outreach, and community activities for vulnerable children and youth supported by the Dzikwa Trust Fund."
    },
    {
      year: "2021",
      title: "Program Expansion",
      description: "Dzikwa Trust's program expansion focuses on strengthening community infrastructure, particularly through its new Community Outreach & Skills Training Building opened in 2021, and on supporting talented vulnerable students to pursue higher education through its Edu4Talent program."
    },
    {
      year: "2020",
      title: "Edu4Talent Initiative",
      description: "The Edu4Talent Initiative is a program by Dzikwa Trust that bridges the gap between talented, vulnerable youth in Dzivarasekwa, Harare, and corporate support, aiming to provide opportunities for higher education and enhance employability skills like critical thinking, IT, and entrepreneurship."
    },
    {
      year: "2019",
      title: "Digital Learning",
      description: "Dzikwa Trust uses digital learning platforms like Learning Passport and Akello Smart Learning to supplement remedial and secondary education, especially after the COVID-19 pandemic highlighted the need for e-learning."
    },
    {
      year: "2006",
      title: "Sustainable Future",
      description: "Dzikwa Trust works towards a sustainable future in Zimbabwe by combining environmental conservation with the education and welfare of orphans and vulnerable children."
    }
  ];

  const teamMembers = [
    {
      name: "Seppo Ainamo",
      position: "Founder",
      bio: "With over 30+ years in community development, Dzikwa leads our strategic vision.",
      image: "https://i.imgur.com/Fn18n8O.jpg"
    },
    {
      name: "Oili Wuolle",
      position: "Programs Director",
      bio: "Expert in youth development and educational program implementation.",
      image: "https://i.imgur.com/Gpol2E7.jpg"
    },
    {
      name: "Priscilla Takawira",
      position: "Dzikwa Center Manager",
      bio: "Passionate advocate for women's empowerment and community engagement.",
      image: "https://i.imgur.com/6guZW72.jpg"
    },
    {
      name: "Levita Chenera",
      position: "Education Liaison Officer",
      bio: "Dzikwa connects us with families and local stakeholders.",
      image: "https://i.imgur.com/1odFRL4.jpg"
    },
  ];

  const partners = [
    "UNICEF Zimbabwe",
    "World Vision",
    "Save the Children",
    "Ministry of Education",
    "Local Government",
    "Community Leaders"
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Dzikwa Trust | Our Story, Mission & Team</title>
        <meta name="description" content="Learn about Dzikwa Trust's 15-year journey empowering communities in Zimbabwe. Meet our team, discover our mission, and see how we're creating lasting change." />
        <meta property="og:title" content="About Us - Dzikwa Trust | Our Story, Mission & Team" />
        <meta property="og:description" content="Learn about Dzikwa Trust's 15-year journey empowering communities in Zimbabwe. Meet our team, discover our mission, and see how we're creating lasting change." />
      </Helmet>

      <section className="relative py-32 bg-gradient-to-r from-primary-custom to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            30+ years of empowering communities, transforming lives, and building a brighter future for Zimbabwe.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 text-primary-custom mr-3" />
                    <h2 className="text-3xl font-bold text-dark-custom">Our Mission</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To empower gifted orphans & vulnerable children through a scholarship for education & general wellbeing, complemented by performing arts & culture, sports, environmental awareness & employability skills.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-primary-custom mr-3" />
                    <h2 className="text-3xl font-bold text-dark-custom">Our Vision</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                   To be a Charity of Choice for orphans & vulnerable children support in Zimbabwe by 2025
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Heart className="w-8 h-8 text-primary-custom mr-3" />
                    <h2 className="text-3xl font-bold text-dark-custom">Our Values</h2>
                  </div>
                  <ul className="text-lg text-gray-600 space-y-2">
                    <li>• <strong>Respect & Integrity:</strong> Transparent and ethical in all our operations</li>
                    <li>• <strong>Empowerment:</strong> Building capacity and self-reliance</li>
                    <li>• <strong>Inclusivity:</strong> Ensuring equal opportunities for all</li>
                    <li>• <strong>Sustainability:</strong> Creating long-term positive impact</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-[10px] overflow-hidden shadow-2xl">
                <img 
                  class="w-full h-96 object-cover" 
                  alt="Community members working together on development project" src="https://i.imgur.com/EQ1bUtD.jpg" />
              </div>
            </motion.div>
          </div>
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to transforming thousands of lives across Zimbabwe.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-primary-custom/20"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0 h-full w-px md:hidden"></div>
                  <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-primary-custom rounded-[10px] border-4 border-light-custom shadow-lg z-10"></div>
                  
                  <div className="bg-white rounded-[10px] p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-5 h-5 text-primary-custom mr-2" />
                      <span className="text-primary-custom font-bold text-lg">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark-custom mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to creating positive change in communities across Zimbabwe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[10px] shadow-lg overflow-hidden card-hover"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    alt={`Portrait of ${member.name}`} src={member.image} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-custom mb-2">{member.name}</h3>
                  <p className="text-primary-custom font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working together with organizations and institutions to maximize our impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[10px] p-6 text-center shadow-md card-hover"
              >
                <div className="w-16 h-16 bg-primary-custom/10 rounded-[10px] flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-custom" />
                </div>
                <p className="text-sm font-semibold text-dark-custom">{partner}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-custom mb-6">
                Organization & Governance
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary-custom mb-3">Transparency</h3>
                  <p className="text-gray-600">
                    We maintain the highest standards of financial transparency and accountability. Our annual reports and financial statements are publicly available.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-custom mb-3">Board of Directors</h3>
                  <p className="text-gray-600">
                    Our board consists of experienced professionals from education, healthcare, finance, and community development sectors.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-custom mb-3">Compliance</h3>
                  <p className="text-gray-600">
                    Registered as a non-profit organization in Zimbabwe, we comply with all regulatory requirements and maintain proper governance structures.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-light-custom rounded-[10px] p-8"
            >
              <h3 className="text-2xl font-bold text-dark-custom mb-6">Key Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Administrative Costs</span>
                  <span className="text-2xl font-bold text-primary-custom">12%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Program Funding</span>
                  <span className="text-2xl font-bold text-primary-custom">88%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Transparency Rating</span>
                  <span className="text-2xl font-bold text-primary-custom">A+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Years of Operation</span>
                  <span className="text-2xl font-bold text-primary-custom">15+</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;