'use client';
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const InstitutionPriorityPage = dynamic(() => import('./InstitutionPriorityPage'), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default function InstitutionPriority() {
  return <InstitutionPriorityPage />;
}
