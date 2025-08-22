import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { successStories } from '@/data/successStoriesData';
import { Heart, MessageSquare, Send, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import ReactPlayer from 'react-player/lazy';

const SuccessStoryPage = () => {
  const { storySlug } = useParams();
  const story = successStories.find(s => s.slug === storySlug);
  const { toast } = useToast();

  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    if (story) {
      const storedLikes = parseInt(localStorage.getItem(`story_${story.id}_likes`) || '0', 10);
      const storedComments = JSON.parse(localStorage.getItem(`story_${story.id}_comments`) || '[]');
      const storedHasLiked = localStorage.getItem(`story_${story.id}_hasLiked`) === 'true';
      
      setLikes(storedLikes);
      setComments(storedComments);
      setHasLiked(storedHasLiked);
    }
  }, [story]);

  const handleLike = () => {
    const newLikes = hasLiked ? likes - 1 : likes + 1;
    setLikes(newLikes);
    setHasLiked(!hasLiked);
    localStorage.setItem(`story_${story.id}_likes`, newLikes);
    localStorage.setItem(`story_${story.id}_hasLiked`, !hasLiked);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        text: newComment,
        author: 'Anonymous',
        date: new Date().toISOString(),
      };
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      setNewComment('');
      localStorage.setItem(`story_${story.id}_comments`, JSON.stringify(updatedComments));
      toast({
        title: "✅ Comment Posted!",
        description: "Thank you for sharing your thoughts.",
      });
    }
  };

  if (!story) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Story not found</h1>
        <Link to="/" className="text-primary-custom mt-4 inline-block">Go back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${story.name}'s Story - Dzikwa Trust`}</title>
        <meta name="description" content={story.story} />
        <meta property="og:title" content={`${story.name}'s Story - Dzikwa Trust`} />
        <meta property="og:description" content={story.story} />
      </Helmet>
      <div className="bg-light-custom">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-primary-custom font-semibold hover:underline flex items-center mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <div className="bg-white rounded-[10px] shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                
                {story.videoUrl ? (
                    <div className="mb-8 aspect-video bg-black rounded-[10px] overflow-hidden shadow-lg">
                        <ReactPlayer
                            url={story.videoUrl}
                            width="100%"
                            height="100%"
                            controls
                            playing
                        />
                    </div>
                ) : (
                    <div className="flex flex-col sm:flex-row items-center gap-8 mb-8">
                        <div className="w-40 h-40 rounded-[10px] overflow-hidden flex-shrink-0 border-4 border-primary-custom">
                        <img 
                          className="w-full h-full object-cover"
                          alt={`Portrait of ${story.name}`}
                          src={story.image} />
                        </div>
                        <div className="text-center sm:text-left">
                            <h1 className="text-4xl font-bold text-dark-custom">{story.name}</h1>
                            <p className="text-lg text-gray-600 mt-2 italic">"{story.story}"</p>
                        </div>
                    </div>
                )}
                
                {!story.videoUrl && (
                    <div className="hidden sm:block text-center sm:text-left mb-8">
                        <h1 className="text-4xl font-bold text-dark-custom">{story.name}</h1>
                        <p className="text-lg text-gray-600 mt-2 italic">"{story.story}"</p>
                    </div>
                )}
                
                {story.videoUrl && (
                    <div className="text-center mt-8 mb-8">
                        <h1 className="text-4xl font-bold text-dark-custom">{story.name}</h1>
                        <p className="text-lg text-gray-600 mt-2 italic">"{story.story}"</p>
                    </div>
                )}


                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <p>{story.fullStory}</p>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200 flex items-center space-x-6">
                  <Button onClick={handleLike} variant="ghost" className="flex items-center space-x-2 text-gray-600 hover:text-red-500">
                    <Heart className={`w-6 h-6 ${hasLiked ? 'text-red-500 fill-current' : ''}`} />
                    <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
                  </Button>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MessageSquare className="w-6 h-6" />
                    <span>{comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-dark-custom mb-6">Comments</h3>
                <form onSubmit={handleCommentSubmit} className="mb-8">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-primary-custom focus:border-primary-custom transition"
                    rows="3"
                    placeholder="Write a comment..."
                  ></textarea>
                  <Button type="submit" className="mt-3">
                    <Send className="w-4 h-4 mr-2" />
                    Post Comment
                  </Button>
                </form>
                <div className="space-y-6">
                  {comments.length > 0 ? (
                    comments.map(comment => (
                      <div key={comment.id} className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                          {comment.author.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-dark-custom">{comment.author}</p>
                          <p className="text-gray-700">{comment.text}</p>
                          <p className="text-xs text-gray-500 mt-1">{new Date(comment.date).toLocaleString()}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">Be the first to comment!</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SuccessStoryPage;