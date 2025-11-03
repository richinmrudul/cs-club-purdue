'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </LoadingContext.Provider>
  );
}

