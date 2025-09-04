'use client';
import dynamic from 'next/dynamic';
import SplashScreen from '@/components/splash-screen/SplashScreen';

const Users = dynamic(() => import('./UserPage'), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default function UserPage() {
  return <Users />;
}
