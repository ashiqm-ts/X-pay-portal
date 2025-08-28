 'use client';
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const ViewCardProduct = dynamic(() => import('./ViewCardProduct'), {
  loading: () => <SplashScreen />,
});

export default function CardProductPage() {
  return <ViewCardProduct />;
}
