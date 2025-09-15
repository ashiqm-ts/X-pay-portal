'use client';
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const BinConfigurationPage = dynamic(() => import('./BinConfigurationPage'), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default function BinConfiguration() {
  return <BinConfigurationPage />;
}
