import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { newsData } from '@/data/newsData';
import { programsData } from '@/components/programs/data';
import { Download, ArrowLeft, HardDrive } from 'lucide-react';

const BackupPage = () => {
  const { toast } = useToast();

  const handleBackup = (data, filename) => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = filename;
    link.click();

    toast({
      title: "✅ Backup Successful",
      description: `${filename} has been downloaded.`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Backup Portal - Dzikwa Trust</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-[calc(100vh-4rem)] bg-light-custom py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link to="/admin" className="text-primary-custom font-semibold hover:underline flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Admin Dashboard
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 sm:p-10 rounded-[10px] shadow-2xl"
          >
            <div className="flex items-center mb-6">
              <HardDrive className="w-10 h-10 text-primary-custom mr-4" />
              <div>
                <h1 className="text-3xl font-bold text-dark-custom">Data Backup Portal</h1>
                <p className="text-gray-600 mt-1">Download JSON backups of your website's key data.</p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div className="p-6 border border-gray-200 rounded-[10px] flex flex-col sm:flex-row items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-dark-custom">News Articles Data</h3>
                  <p className="text-sm text-gray-500 mt-1">Contains all news, events, and newsletters.</p>
                </div>
                <Button 
                  onClick={() => handleBackup(newsData, 'dzikwa-news-backup.json')}
                  className="mt-4 sm:mt-0"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Backup News
                </Button>
              </div>

              <div className="p-6 border border-gray-200 rounded-[10px] flex flex-col sm:flex-row items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-dark-custom">Programs Data</h3>
                  <p className="text-sm text-gray-500 mt-1">Contains all program and sub-program information.</p>
                </div>
                <Button 
                  onClick={() => handleBackup(programsData, 'dzikwa-programs-backup.json')}
                  className="mt-4 sm:mt-0"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Backup Programs
                </Button>
              </div>
            </div>

            <div className="mt-10 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-[10px]">
                <p className="font-bold">Important Note</p>
                <p>This is a manual backup system. For automated, real-time backups, a full backend solution with a database like Supabase is recommended. This ensures your data is always safe and recoverable.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BackupPage;