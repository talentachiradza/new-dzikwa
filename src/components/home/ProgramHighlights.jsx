import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Heart, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProgramHighlights = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Primary, secondary, and higher education support with ICT training and e-learning programs.",
      delay: 0
    },
    {
      icon: Heart,
      title: "Wellbeing",
      description: "Nutrition, healthcare, performing arts, and girls' empowerment programs for holistic development.",
      delay: 0.1
    },
    {
      icon: Users,
      title: "Edu4Talent",
      description: "Career guidance, mentoring, and entrepreneurship skills to unlock potential and create opportunities.",
      delay: 0.2
    },
    {
      icon: TreePine,
      title: "RefoSec",
      description: "Environmental conservation through reforestation, animal husbandry, and sustainable agriculture.",
      delay: 0.3
    }
  ];

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
            Our Impact Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We focus on four key areas to create lasting change in communities across Zimbabwe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: program.delay }}
                className="program-card rounded-[10px] p-8 text-center card-hover"
              >
                <div className="w-16 h-16 bg-primary-custom rounded-[10px] flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-custom mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">
                  {program.description}
                </p>
                <Link to="/programs">
                  <Button variant="outline" className="border-primary-custom text-primary-custom hover:bg-primary-custom hover:text-white rounded-[10px]">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;