import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { LayoutDashboard, Newspaper, List, FileUp, Database, LogOut, Image, Award, Video, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [galleryMediaType, setGalleryMediaType] = useState('image');
  const [storyMediaType, setStoryMediaType] = useState('image');
  const fileInputRef = useRef(null);
  const { toast } = useToast();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      toast({
        title: "File Selected",
        description: `${file.name} is ready to be published.`,
      });
    }
  };

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };
  
  const handleFormSubmit = (e, type) => {
    e.preventDefault();
    toast({
      title: `✅ ${type} Submitted (Simulated)`,
      description: `Your ${type.toLowerCase()} has been added. In a real app, this would be saved to a database.`,
      duration: 5000,
    });
    setUploadedFile(null);
    e.target.reset();
    if (type === 'Gallery Item') {
      setGalleryMediaType('image');
    }
    if (type === 'Success Story') {
      setStoryMediaType('image');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
            <div>
                <h2 className="text-2xl font-bold text-dark-custom mb-4">Welcome, {user?.name || 'Admin'}!</h2>
                <p className="text-gray-600">This is your admin dashboard. From here you can manage the website's content.</p>
                <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-[10px]">
                    <p className="font-bold">Note on Supabase Integration</p>
                    <p>Currently, this admin panel uses local storage for demonstration. For a production-ready application with persistent data, user management, and file storage, Supabase integration is required. Please complete the Supabase integration steps to enable these features.</p>
                </div>
            </div>
        );
      case 'news':
        return (
          <div>
            <h2 className="text-2xl font-bold text-dark-custom mb-6">News Administration</h2>
            <div className="bg-white p-8 rounded-[10px] shadow-md">
                <form onSubmit={(e) => handleFormSubmit(e, 'Article')}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                            <input type="text" id="title" className="w-full p-2 border border-gray-300 rounded-[10px]" placeholder="Enter article title" required />
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <select id="category" className="w-full p-2 border border-gray-300 rounded-[10px]">
                                <option>Latest News</option>
                                <option>Event</option>
                                <option>Newsletter</option>
                            </select>
                        </div>
                        <div>
                             <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                            <input type="text" id="author" className="w-full p-2 border border-gray-300 rounded-[10px]" placeholder="Enter author name" defaultValue={user?.name} required />
                        </div>
                        <div className="col-span-2">
                             <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">Summary</label>
                            <textarea id="summary" rows="3" className="w-full p-2 border border-gray-300 rounded-[10px]" placeholder="A brief summary of the article" required></textarea>
                        </div>
                        <div className="col-span-2">
                             <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                            <textarea id="content" rows="8" className="w-full p-2 border border-gray-300 rounded-[10px]" placeholder="Full article content. Use markdown for formatting." required></textarea>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700 mb-1">Video URL (Optional)</label>
                            <input type="url" id="videoUrl" className="w-full p-2 border border-gray-300 rounded-[10px]" placeholder="e.g., https://www.youtube.com/watch?v=..." />
                        </div>
                         <div className="col-span-2">
                             <label className="block text-sm font-medium text-gray-700 mb-2">Featured Media (Image/PDF)</label>
                             <div className="flex items-center gap-4">
                                <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" accept="image/*,.pdf" />
                                <Button type="button" variant="outline" onClick={handleFileUploadClick}>
                                    <FileUp className="mr-2 h-4 w-4" /> Upload Media
                                </Button>
                                {uploadedFile && <span className="text-sm text-gray-600">{uploadedFile.name}</span>}
                             </div>
                        </div>
                        <div className="col-span-2 text-right">
                           <Button type="submit">Publish Article</Button>
                        </div>
                    </div>
                </form>
            </div>
          </div>
        );
      case 'manage':
         return (
            <div>
              <h2 className="text-2xl font-bold text-dark-custom mb-6">Manage Existing Content</h2>
              <div className="bg-white p-8 rounded-[10px] shadow-md">
                <p>This section will list all existing news articles, stories, and gallery items with options to edit or delete them. This requires a backend like Supabase to be fully functional.</p>
              </div>
            </div>
        );
      case 'stories':
        return (
          <div>
            <h2 className="text-2xl font-bold text-dark-custom mb-6">Success Stories Management</h2>
            <div className="bg-white p-8 rounded-[10px] shadow-md">
                <form onSubmit={(e) => handleFormSubmit(e, 'Success Story')}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <label htmlFor="storyName" className="block text-sm font-medium text-gray-700 mb-1">Person's Name</label>
                            <input type="text" id="storyName" className="w-full p-2 border border-gray-300 rounded-[10px]" placeholder="e.g., Sarah Mukamuri" required />
                        </div>
                        <div className="col-span-2">
                             <label htmlFor="storyQuote" className="block text-sm font-medium text-gray-700 mb-1">Short Story / Quote</label>
                            <textarea id="storyQuote" rows="3" className="w-full p-2 border border-gray-300 rounded-[10px]" placeholder="A brief, impactful quote." required></textarea>
                        </div>
                        <div className="col-span-2">
                             <label htmlFor="storyFull" className="block text-sm font-medium text-gray-700 mb-1">Full Story</label>
                            <textarea id="storyFull" rows="8" className="w-full p-2 border border-gray-300 rounded-[10px]" placeholder="The complete success story." required></textarea>
                        </div>
                         <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Media Type</label>
                            <RadioGroup defaultValue="image" value={storyMediaType} onValueChange={setStoryMediaType} className="flex items-center gap-6">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="image" id="s-image" />
                                    <Label htmlFor="s-image" className="flex items-center gap-2"><Image className="w-4 h-4" /> Portrait Image</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="video" id="s-video" />
                                    <Label htmlFor="s-video" className="flex items-center gap-2"><Video className="w-4 h-4" /> Video URL</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="col-span-2">
                            {storyMediaType === 'image' && (
                                <>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Image Upload</label>
                                    <div className="flex items-center gap-4">
                                        <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" accept="image/*" />
                                        <Button type="button" variant="outline" onClick={handleFileUploadClick}>
                                            <FileUp className="mr-2 h-4 w-4" /> Upload Image
                                        </Button>
                                        {uploadedFile && <span className="text-sm text-gray-600">{uploadedFile.name}</span>}
                                    </div>
                                </>
                            )}
                             {storyMediaType === 'video' && (
                                <>
                                    <label htmlFor="storyVideoUrl" className="block text-sm font-medium text-gray-700 mb-1">Video URL</label>
                                    <input type="url" id="storyVideoUrl" className="w-full p-2 border border-gray-300 rounded-[10px]" placeholder="e.g., https://www.youtube.com/watch?v=..." />
                                </>
                            )}
                        </div>
                        <div className="col-span-2 text-right">
                           <Button type="submit">Publish Story</Button>
                        </div>
                    </div>
                </form>
            </div>
          </div>
        );
      case 'gallery':
        return (
           <div>
            <h2 className="text-2xl font-bold text-dark-custom mb-6">Gallery Management</h2>
            <div className="bg-white p-8 rounded-[10px] shadow-md">
                <form onSubmit={(e) => handleFormSubmit(e, 'Gallery Item')}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Media Type</label>
                            <RadioGroup defaultValue="image" value={galleryMediaType} onValueChange={setGalleryMediaType} className="flex items-center gap-6">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="image" id="r-image" />
                                    <Label htmlFor="r-image" className="flex items-center gap-2"><Image className="w-4 h-4" /> Image</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="videoUrl" id="r-videoUrl" />
                                    <Label htmlFor="r-videoUrl" className="flex items-center gap-2"><LinkIcon className="w-4 h-4" /> Video URL</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div>
                            <label htmlFor="galleryCategory" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <select id="galleryCategory" className="w-full p-2 border border-gray-300 rounded-[10px]">
                                <option>Education</option>
                                <option>Environment</option>
                                <option>Empowerment</option>
                                <option>Sports</option>
                                <option>Wellbeing</option>
                                <option>Arts & Culture</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                             <label htmlFor="galleryAlt" className="block text-sm font-medium text-gray-700 mb-1">Description (Alt Text)</label>
                            <input type="text" id="galleryAlt" className="w-full p-2 border border-gray-300 rounded-[10px]" placeholder="A brief description of the media" required />
                        </div>
                        <div className="col-span-2">
                            {galleryMediaType === 'image' && (
                                <>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Image Upload</label>
                                    <div className="flex items-center gap-4">
                                        <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" accept="image/*" required />
                                        <Button type="button" variant="outline" onClick={handleFileUploadClick}>
                                            <FileUp className="mr-2 h-4 w-4" /> Upload Image
                                        </Button>
                                        {uploadedFile && <span className="text-sm text-gray-600">{uploadedFile.name}</span>}
                                    </div>
                                </>
                            )}
                            {galleryMediaType === 'videoUrl' && (
                                <>
                                    <label htmlFor="galleryVideoUrl" className="block text-sm font-medium text-gray-700 mb-1">Video URL</label>
                                    <input type="url" id="galleryVideoUrl" className="w-full p-2 border border-gray-300 rounded-[10px]" placeholder="e.g., https://www.youtube.com/watch?v=..." required />
                                </>
                            )}
                        </div>
                        <div className="col-span-2 text-right">
                           <Button type="submit">Add to Gallery</Button>
                        </div>
                    </div>
                </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Dzikwa Trust</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-light-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mb-8"
          >
            <h1 className="text-4xl font-bold text-dark-custom">
              Site Administration
            </h1>
            <Button variant="outline" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8">
            <aside className="md:w-1/4">
              <div className="bg-white p-4 rounded-[10px] shadow-md">
                <nav className="space-y-2">
                  <Button
                    variant={activeTab === 'dashboard' ? 'secondary' : 'ghost'}
                    onClick={() => setActiveTab('dashboard')}
                    className="w-full justify-start"
                  >
                    <LayoutDashboard className="mr-3 h-5 w-5" />
                    Dashboard
                  </Button>
                  <Button
                    variant={activeTab === 'news' ? 'secondary' : 'ghost'}
                    onClick={() => setActiveTab('news')}
                    className="w-full justify-start"
                  >
                    <Newspaper className="mr-3 h-5 w-5" />
                    Add News
                  </Button>
                   <Button
                    variant={activeTab === 'stories' ? 'secondary' : 'ghost'}
                    onClick={() => setActiveTab('stories')}
                    className="w-full justify-start"
                  >
                    <Award className="mr-3 h-5 w-5" />
                    Success Stories
                  </Button>
                   <Button
                    variant={activeTab === 'gallery' ? 'secondary' : 'ghost'}
                    onClick={() => setActiveTab('gallery')}
                    className="w-full justify-start"
                  >
                    <Image className="mr-3 h-5 w-5" />
                    Gallery
                  </Button>
                  <Button
                    variant={activeTab === 'manage' ? 'secondary' : 'ghost'}
                    onClick={() => setActiveTab('manage')}
                    className="w-full justify-start"
                  >
                    <List className="mr-3 h-5 w-5" />
                    Manage Content
                  </Button>
                  <Link to="/backup-portal" className="w-full">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                    >
                      <Database className="mr-3 h-5 w-5" />
                      Backup System
                    </Button>
                  </Link>
                </nav>
              </div>
            </aside>

            <main className="flex-1">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;