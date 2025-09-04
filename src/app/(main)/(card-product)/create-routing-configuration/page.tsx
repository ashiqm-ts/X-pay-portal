'use client';
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const CreateRoutingConfiguration = dynamic(() => import('./CreateRoutingConfiguration'), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default function CreateRoutingConfigurationPage() {
  return <CreateRoutingConfiguration />;
}
