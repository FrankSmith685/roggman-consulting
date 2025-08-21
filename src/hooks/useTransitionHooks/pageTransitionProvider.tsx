
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type PageTransitionContextType = {
  loading: boolean;
  navigate: (url: string) => void;
};

const PageTransitionContext = createContext<PageTransitionContextType>({
  loading: false,
  navigate: () => {},
});

export const PageTransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);
  const [pendingPath, setPendingPath] = useState<string | null>(null);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    if (pendingPath && pathname === pendingPath) {
      setLoading(false);
      setPendingPath(null);
    }
  }, [pathname, pendingPath]);

  const navigate = (url: string) => {
    if (url === pathname) return;
    setPendingPath(url);
    setLoading(true);
    router.push(url);
  };

  return (
    <PageTransitionContext.Provider value={{ loading, navigate }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => useContext(PageTransitionContext);