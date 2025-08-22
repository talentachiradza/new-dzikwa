import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, GraduationCap, Users, Monitor, Heart, Stethoscope, Music, Briefcase, Sprout, Paintbrush, Medal, TreePine, HeartHandshake as Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const iconMap = {
  BookOpen,
  GraduationCap,
  Users,
  Monitor,
  Heart,
  Stethoscope,
  Music,
  Briefcase,
  Sprout,
  Paintbrush,
  Medal,
  TreePine,
  Handshake,
};

const ProgramList = ({ programs, expandedProgram, onToggle }) => {
  if (programs.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-gray-500">No programs match your search.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {programs.map((program) => {
        const ProgramIcon = program.icon;
        const isExpanded = expandedProgram === program.id;

        return (
          <motion.div
            key={program.id}
            layout
            initial={{ borderRadius: 12 }}
            className={`overflow-hidden shadow-lg border ${isExpanded ? 'border-primary-custom/50' : 'border-transparent'}`}
          >
            <motion.header
              layout
              onClick={() => onToggle(program.id)}
              className="p-6 cursor-pointer bg-white flex justify-between items-center rounded-t-xl"
            >
              <div className="flex items-center gap-6">
                <div className={`w-16 h-16 rounded-full ${program.color} flex items-center justify-center`}>
                  <ProgramIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-custom">{program.title}</h3>
                  <p className="text-gray-600 hidden md:block">{program.description}</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-primary-custom" />
              </motion.div>
            </motion.header>
            <p className="text-gray-600 md:hidden p-6 pt-0 bg-white">{program.description}</p>

            <AnimatePresence>
              {isExpanded && (
                <motion.section
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="bg-light-custom/50"
                >
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {program.subPrograms.map((sub, index) => {
                      const SubIcon = iconMap[sub.icon] || BookOpen;
                      return (
                        <motion.div
                          key={sub.slug}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-4 mb-3">
                              <SubIcon className="w-6 h-6 text-primary-custom" />
                              <h4 className="text-xl font-bold text-dark-custom">{sub.title}</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              {sub.description}
                            </p>
                          </div>
                           <Link to={`/programs/${sub.slug}`} className="mt-auto">
                            <Button variant="outline" className="w-full">
                              Learn More
                            </Button>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProgramList;
