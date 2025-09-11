'use client';
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const RoutingTimerConfigurationPage = dynamic(() => import('./RoutingTimerConfigurationPage'), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default function RoutingTimerConfiguration() {
  return <RoutingTimerConfigurationPage />;
}
