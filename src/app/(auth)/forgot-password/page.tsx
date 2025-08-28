 'use client';
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const ForgotPassword = dynamic(() => import('./ForgotPasswordPage'), {
  loading: () => <SplashScreen />,
});

export default function ForgotPasswordPage() {
  return <ForgotPassword />;
}





