'use client';
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const ViewRoutingConfiguration = dynamic(() => import('./ViewRoutingConfiguration'), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default function ViewRoutingConfigurationPage() {
  return <ViewRoutingConfiguration />;
}
