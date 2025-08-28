"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const msg = `Oops! The page you\'re looking for doesn\'t exist`;
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">{msg}</p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go back home
        </Link>
      </div>
    </div>
  );
}
