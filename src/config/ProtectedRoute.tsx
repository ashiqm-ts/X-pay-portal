'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axiosInstance from './axios';
import { useDialog } from '@/provider/DialogProvider';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { handleLoader, handleResponse } = useDialog();
  let pendingRequests = 0;

  const setupAxiosInterceptors = () => {
    const reqInterceptor = axiosInstance.interceptors.request.use((config) => {
      config.timeout = 80000;
      pendingRequests++;
      handleLoader(true);
      return config;
    });

    const resInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        pendingRequests = Math.max(0, pendingRequests - 1);
        if (pendingRequests === 0) handleLoader(false);
        return response;
      },
      (error) => {
        pendingRequests = Math.max(0, pendingRequests - 1);
        if (pendingRequests === 0) handleLoader(false);
        console.log('Session expired. Redirecting to login..."', error);
        handleResponse('Service is currently unavailable. Please try again later', true);

        if (error.response?.status === 401) {
          console.log('Session expired. Redirecting to login..."');
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(reqInterceptor);
      axiosInstance.interceptors.response.eject(resInterceptor);
    };
  };

  useEffect(() => {
    const cleanupInterceptors = setupAxiosInterceptors();
    return cleanupInterceptors;
  }, [handleLoader, handleResponse]);

  return <>{children}</>;
}
