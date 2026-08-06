/**
 * Frontend environment variables and runtime validation
 */

export interface ClientEnv {
  NEXT_PUBLIC_API_URL: string;
  NEXT_PUBLIC_APP_ENV: 'development' | 'production' | 'test';
}

export function getClientEnv(): ClientEnv {
  return {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000',
    NEXT_PUBLIC_APP_ENV: (process.env.NEXT_PUBLIC_APP_ENV as ClientEnv['NEXT_PUBLIC_APP_ENV']) || 'development',
  };
}

export const env = getClientEnv();
