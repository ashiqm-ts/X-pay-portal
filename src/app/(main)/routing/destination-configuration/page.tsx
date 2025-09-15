'use client';
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const DestinationConfigurationPage = dynamic(() => import('./DestinationConfigurationPage'), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default function DestinationConfiguration() {
  return <DestinationConfigurationPage />;
}
