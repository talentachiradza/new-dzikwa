
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { newsData } from '@/data/newsData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag, FileText } from 'lucide-react';
import ReactPlayer from 'react-player/lazy';

const NewsDetailPage = () => {
  const { newsSlug } = useParams();
  
  const newsItem = newsData.find(item => item.slug === newsSlug);

  if (!newsItem) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
        <h1 className="text-4xl font-bold text-primary-custom mb-4">Article Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">We couldn't find the news article you were looking for.</p>
        <Link to="/news">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
          </Button>
        </Link>
      </div>
    );
  }

  const renderContent = (contentItem, index) => {
    switch (contentItem.type) {
      case 'paragraph':
        return <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">{contentItem.text}</p>;
      case 'image':
        return (
            <div key={index} className="my-8">
                <img  className="w-full rounded-[10px] shadow-lg" alt={contentItem.alt} src={contentItem.src} />
            </div>
        );
      case 'video':
        return (
            <div key={index} className="my-8 aspect-video bg-black rounded-[10px] overflow-hidden shadow-lg">
                <ReactPlayer 
                    url={contentItem.src} 
                    title={contentItem.title}
                    width="100%"
                    height="100%"
                    controls
                />
            </div>
        );
      case 'pdf':
        return (
            <div key={index} className="my-8 p-6 bg-primary-custom/10 rounded-[10px] flex items-center justify-between">
                <div className="flex items-center">
                    <FileText className="w-8 h-8 text-primary-custom mr-4" />
                    <span className="font-semibold text-dark-custom">{contentItem.title}</span>
                </div>
                <a href={contentItem.src} target="_blank" rel="noopener noreferrer">
                    <Button>Download PDF</Button>
                </a>
            </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${newsItem.title} - Dzikwa Trust News`}</title>
        <meta name="description" content={newsItem.summary} />
      </Helmet>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/news" className="text-primary-custom font-semibold hover:underline flex items-center mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all news
            </Link>

            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1.5" /> {new Date(newsItem.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="flex items-center">
                <User className="w-4 h-4 mr-1.5" /> {newsItem.author}
              </span>
              <span className="flex items-center bg-primary-custom/10 text-primary-custom font-semibold px-2 py-1 rounded">
                <Tag className="w-3 h-3 mr-1.5" />
                {newsItem.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-dark-custom mb-6">
              {newsItem.title}
            </h1>
            
            <div className="aspect-video w-full rounded-[10px] overflow-hidden shadow-2xl mb-12">
                <img  class="w-full h-full object-cover" alt={newsItem.featuredImage} src="https://images.unsplash.com/photo-1662485732745-5a841bfe7f65" />
            </div>
            
            <div className="prose prose-lg max-w-none">
              {newsItem.content.map(renderContent)}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NewsDetailPage;
