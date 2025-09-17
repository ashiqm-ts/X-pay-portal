'use client';
import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface NavigationContextProps {
  loading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);

  const startLoading = useCallback(() => setLoading(true), []);
  const stopLoading = useCallback(() => setLoading(false), []);

  return <NavigationContext.Provider value={{ loading, startLoading, stopLoading }}>{children}</NavigationContext.Provider>;
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) throw new Error('useNavigation must be used within NavigationProvider');
  return context;
}
