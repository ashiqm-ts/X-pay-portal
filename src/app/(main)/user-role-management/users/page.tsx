"use client";
import dynamic from 'next/dynamic';
import SplashScreen from '@/components/splash-screen/SplashScreen';

const Users = dynamic(() => import('./UserPage'), 
{
  loading: () => <SplashScreen />,
});

export default function UserPage() {
  return <Users />;
}


