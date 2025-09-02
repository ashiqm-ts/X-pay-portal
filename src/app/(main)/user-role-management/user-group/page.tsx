"use client";
import dynamic from 'next/dynamic';

import SplashScreen from '@/components/splash-screen/SplashScreen';
const UserGroupPage = dynamic(() => import('./UserGroupPage'), {
  loading: () => <SplashScreen />,
});

export default function UserGroup() {
  return <UserGroupPage />;
}
