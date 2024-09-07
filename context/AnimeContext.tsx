'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Anime, AnimeNode } from '@/types';

interface AnimeContextProps {
  fetchData: (
    endpoint: string,
    params: Record<string, string>
  ) => Promise<AnimeNode[] | Anime>;
  loading: boolean;
  error: string | null;
}

const AnimeContext = createContext<AnimeContextProps | undefined>(undefined);

export const useAnime = () => {
  const context = useContext(AnimeContext);
  if (!context) {
    throw new Error('useAnime must be used within an AnimeProvider');
  }
  return context;
};

interface AnimeProviderProps {
  children: ReactNode;
}

export const AnimeProvider: React.FC<AnimeProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (
    endpoint: string,
    params: Record<string, string>
  ): Promise<AnimeNode[] | Anime> => {
    setLoading(true);
    setError(null);
    try {
      const url = new URL(`http://localhost:3000/api/${endpoint}`);
      const searchParams = new URLSearchParams(params);
      url.search = searchParams.toString();

      const response = await fetch(url.toString(), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      // console.log('Fetched data:', JSON.stringify(data, null, 2));
      // season/rank returns double data, details returns single data
      return data.data || data;
    } catch (err: any) {
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimeContext.Provider value={{ fetchData, loading, error }}>
      {children}
    </AnimeContext.Provider>
  );
};
