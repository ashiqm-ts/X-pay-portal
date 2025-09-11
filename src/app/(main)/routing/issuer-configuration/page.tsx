'use client';
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const IssuerConfigurationPage = dynamic(() => import('./IssuerConfigurationPage'), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default function IssuerConfiguration() {
  return <IssuerConfigurationPage />;
}
