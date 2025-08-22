import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { newsData } from '@/data/newsData';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const LatestNewsSection = () => {
  const latestNews = newsData
    .filter(item => item.category === 'Latest News')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

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
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about our latest activities, achievements, and community stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((newsItem, index) => (
            <motion.div
              key={newsItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[10px] shadow-lg overflow-hidden flex flex-col card-hover"
            >
              <div className="aspect-video overflow-hidden">
                <img  
                  class="w-full h-full object-cover" 
                  alt={newsItem.featuredImage} src="https://images.unsplash.com/photo-1662485732745-5a841bfe7f65" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(newsItem.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h3 className="text-xl font-bold text-dark-custom mb-3 flex-1">
                  {newsItem.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  {newsItem.summary}
                </p>
                <Link to={`/news/${newsItem.slug}`} className="mt-auto">
                  <Button variant="outline" className="w-full border-primary-custom text-primary-custom hover:bg-primary-custom hover:text-white rounded-[10px]">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Link to="/news">
                <Button size="lg" className="bg-primary-custom hover:bg-primary-hover text-white rounded-[10px]">
                    View All News
                </Button>
            </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestNewsSection;