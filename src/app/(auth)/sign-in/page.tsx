'use client';
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const SignIn = dynamic(() => import('./SignInPage'), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default function SignInPage() {
  return <SignIn />;
}
