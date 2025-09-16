'use client';
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const RoutingOverrideRulePage = dynamic(() => import('./RoutingOverrideRulePage'), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default function RoutingOverrideRule() {
  return <RoutingOverrideRulePage />;
}
