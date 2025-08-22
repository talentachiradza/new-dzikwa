import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { newsData } from '@/data/newsData';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Latest News', 'Event', 'Newsletter'];

  const filteredNews = useMemo(() => {
    const sortedData = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
    if (activeCategory === 'All') {
      return sortedData;
    }
    return sortedData.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Helmet>
        <title>News & Events - Dzikwa Trust</title>
        <meta name="description" content="Stay up-to-date with the latest news, events, and newsletters from Dzikwa Trust. Discover our impact and stories from the community." />
        <meta property="og:title" content="News & Events - Dzikwa Trust" />
        <meta property="og:description" content="Stay up-to-date with the latest news, events, and newsletters from Dzikwa Trust. Discover our impact and stories from the community." />
      </Helmet>

      <section className="relative py-32 bg-gradient-to-r from-primary-custom to-teal-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            News & Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Your source for the latest updates, stories, and announcements from Dzikwa Trust.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-2 rounded-[10px] flex space-x-2">
              {categories.map(category => (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  variant={activeCategory === category ? 'default' : 'ghost'}
                  className={`rounded-[10px] transition-colors duration-300 ${activeCategory === category ? 'bg-primary-custom text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((newsItem, index) => (
              <motion.div
                key={newsItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[10px] shadow-lg overflow-hidden flex flex-col card-hover"
              >
                <Link to={`/news/${newsItem.slug}`} className="block aspect-video overflow-hidden">
                  <img  
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    alt={newsItem.featuredImage} src="https://images.unsplash.com/photo-1662485732745-5a841bfe7f65" />
                </Link>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(newsItem.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span className="flex items-center bg-primary-custom/10 text-primary-custom font-semibold px-2 py-1 rounded">
                      <Tag className="w-3 h-3 mr-1.5" />
                      {newsItem.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-dark-custom mb-3 flex-1">
                    <Link to={`/news/${newsItem.slug}`} className="hover:text-primary-custom transition-colors">
                      {newsItem.title}
                    </Link>
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
        </div>
      </section>
    </>
  );
};

export default NewsPage;