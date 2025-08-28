 'use client';
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const CreateCardProduct = dynamic(() => import('./CreateCardProduct'), {
  loading: () => <SplashScreen />,
});

export default function CardProductPage() {
  return <CreateCardProduct />;
}
