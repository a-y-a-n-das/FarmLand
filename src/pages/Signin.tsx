import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Leaf } from 'lucide-react';
import axios from 'axios';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Handle email/password authentication
    console.log('Signing in with:', { email, password });

    try{

      
    const response  = await axios.post('/token', {
      email,
      password,
    });

    if(response.status === 200 || response.status === 201){
      localStorage.setItem('token', response.data.token);
      window.location.href = '/shop';
    } else {
      // Handle error (e.g., show error message)
      console.error('Sign in failed');
      setIsLoading(false);

    }   
  } catch (error) {
      console.error('An error occurred during sign in:', error);
      setIsLoading(false);
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const handleGoogleSignin = () => {
    // Handle Google authentication
    console.log('Signing in with Google');
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full max-h-screen overflow-y-auto py-4">
        {/* Logo/Brand */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full shadow-lg mb-3">
            <Leaf className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">FarmLand</h1>
          <p className="text-sm text-gray-600">Fresh from farm to your table</p>
        </div>

        {/* Sign In Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Welcome Back!</h2>
            <p className="text-xs text-gray-600 mt-1">
              Sign in to continue or create a new account
            </p>
          </div>

          {/* Info Banner */}
          <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-xs text-green-800 text-center">
              <span className="font-semibold">New here?</span> Don't worry! If your account doesn't exist, we'll create one for you automatically. 🌱
            </p>
          </div>

          {/* Google Sign In */}
          <button
            onClick={handleGoogleSignin}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-2.5 px-4 rounded-full transition-all duration-300 hover:shadow-md mb-4"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-white text-gray-500 font-medium">Or continue with email</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-full focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-full focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <a href="#" className="text-sm text-green-600 hover:text-green-700 font-medium">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Sign In / Sign Up'
              )}
            </button>
          </form>

          {/* Terms & Privacy */}
          <p className="mt-4 text-xs text-center text-gray-500">
            By continuing, you agree to FarmLand's{' '}
            <a href="#" className="text-green-600 hover:text-green-700 font-medium">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-green-600 hover:text-green-700 font-medium">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-4">
          <p className="text-xs text-gray-600">
            Want to browse first?{' '}
            <a href="/shop" className="text-green-600 hover:text-green-700 font-semibold">
              Continue as Guest
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
