'use client';
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const SourceConfigurationPage = dynamic(() => import('./SourceConfigurationPage'), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default function SourceConfiguration() {
  return <SourceConfigurationPage />;
}
