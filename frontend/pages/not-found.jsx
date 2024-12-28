"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect the user back in history or to the homepage after 5 seconds if there is no history
    const timer = setTimeout(() => {
      if (window.history.length > 2) {
        router.back(); // Go back to the previous page
      } else {
        router.push('/'); // Fallback to homepage if no history
      }
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center max-w-lg bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you’re looking for doesn’t seem to exist.
        </p>
        <button
          onClick={() => {
            if (window.history.length > 2) {
              router.back(); // Go back to the previous page
            } else {
              router.push('/'); // Fallback to homepage if no history
            }
          }}
          className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 py-2 px-6 rounded-lg font-semibold"
        >
          Go to Home
        </button>
        <p className="mt-4 text-sm text-slate-500">
          Redirecting you to the previous page in 5 seconds.....
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
