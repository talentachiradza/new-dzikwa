
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { successStories } from '@/data/successStoriesData';

const SuccessStories = () => {
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
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people whose lives have been transformed through our programs.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {successStories.map((story, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="testimonial-card rounded-[10px] p-8 md:p-12 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="w-32 h-32 rounded-[10px] overflow-hidden flex-shrink-0">
                        <img 
                          className="w-full h-full object-cover" 
                          alt={`Portrait of ${story.name}`}
                         src={story.image} />
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                          "{story.story}"
                        </p>
                        <h4 className="text-xl font-bold text-primary-custom mb-4">
                          {story.name}
                        </h4>
                        <Link to={`/story/${story.slug}`}>
                          <Button variant="outline" className="border-primary-custom text-primary-custom hover:bg-primary-custom hover:text-white">
                            Read Full Story
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default SuccessStories;
