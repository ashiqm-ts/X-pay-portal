'use client';
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const Dashboard = dynamic(() => import('./DashboardPage'), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default function DashboardPage() {
  return <Dashboard />;
}
