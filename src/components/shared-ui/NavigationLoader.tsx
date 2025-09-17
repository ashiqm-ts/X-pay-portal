'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CircularProgress, Box } from '@mui/material';
import { useNavigation } from '@/provider/NavigationContext';
import SplashScreen from '../splash-screen/SplashScreen';
export default function NavigationLoader() {
  const pathname = usePathname();
  const { loading, stopLoading } = useNavigation();
  const size = 50;

  useEffect(() => {
    if (loading) {
      stopLoading();
    }
  }, [pathname]);

  if (!loading) return null;

  return <SplashScreen size={50} thickness={4} />;
}
