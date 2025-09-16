'use client';
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const AdapterConfigurationPage = dynamic(() => import('./AdapterConfigurationPage'), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default function AdapterConfiguration() {
  return <AdapterConfigurationPage />;
}
