import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    image: "https://i.imgur.com/KcQljL4.jpg",
    alt: "Happy children learning in a bright classroom",
    title: "Empowering Children Through Education and Overall Wellbeing",
    description: "Providing quality education & support to vulnerable children in Zimbabwe since 2002."
  },
  {
    image: "https://i.imgur.com/BDvY5mn.jpg", // Agriculture image
    alt: "Community members tending to a lush community garden",
    title: "Reforestation & Food Security",
    description: "Developing physical fitness, teamwork, and discipline through organized sports activities and competitions."
  },
  {
    image: "https://i.imgur.com/gNLD1c4.jpg", // Mentorship image
    alt: "A mentor guiding a young student with a laptop",
    title: "Dzikwa Trust Performing Arts and Culture",
    description: "We provide career guidance and entrepreneurship skills to the next generation of leaders."
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/programs?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <img 
            className="w-full h-full object-cover"
            alt={slides[currentSlide].alt}
           src={slides[currentSlide].image} />
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>
      </AnimatePresence>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
        
        <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8"
        >
            <div className="relative">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for programs or initiatives..."
                    className="w-full px-5 py-4 pl-12 border-2 border-transparent bg-white/20 text-white placeholder-gray-300 rounded-[10px] text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/30"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-300" />
                <Button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-[10px]">
                    Search
                </Button>
            </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/donate">
            <Button size="lg" className="bg-primary-custom hover:bg-primary-hover text-white px-8 py-4 text-lg donation-pulse rounded-[10px]">
              Donate Now
              <Heart className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link to="/programs">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-[10px]">
              Our Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 rounded-[10px] hover:bg-white/40 transition-colors"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 rounded-[10px] hover:bg-white/40 transition-colors"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-[10px] transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;