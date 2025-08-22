import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const LoginPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const from = location.state?.from?.pathname || '/admin';

  const handleSubmit = (e) => {
    e.preventDefault();
    let success = false;
    if (isLoginView) {
      success = login(email, password);
    } else {
      success = signup(name, email, password);
    }

    if (success) {
      navigate(from, { replace: true });
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login - Dzikwa Trust</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-light-custom py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-8 bg-white p-10 rounded-[10px] shadow-2xl"
        >
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-dark-custom">
              {isLoginView ? 'Sign in to your account' : 'Create a new account'}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <button
                onClick={() => setIsLoginView(!isLoginView)}
                className="font-medium text-primary-custom hover:text-primary-hover"
              >
                {isLoginView ? 'create an account' : 'sign in instead'}
              </button>
            </p>
             <p className="mt-4 text-center text-xs text-gray-500">
                (Prototype only: use <strong>admin@dzikwa.org</strong> and <strong>password123</strong> to sign in)
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              {!isLoginView && (
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-custom focus:border-primary-custom focus:z-10 sm:text-sm"
                    placeholder="Full Name"
                  />
                </div>
              )}
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${isLoginView ? 'rounded-t-md' : ''} focus:outline-none focus:ring-primary-custom focus:border-primary-custom focus:z-10 sm:text-sm`}
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-custom focus:border-primary-custom focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <Button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-[10px] text-white bg-primary-custom hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-custom">
                {isLoginView ? 'Sign in' : 'Sign up'}
              </Button>
            </div>
          </form>
           <div className="text-center text-sm">
                <Link to="/" className="font-medium text-primary-custom hover:text-primary-hover">
                    &larr; Back to Home
                </Link>
            </div>
        </motion.div>
      </div>
    </>
  );
};

export default LoginPage;