'use client';
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const RoutingConfigurationPage = dynamic(() => import('./RoutingConfigurationPage'), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default function RoutingConfiguration() {
  return <RoutingConfigurationPage />;
}
