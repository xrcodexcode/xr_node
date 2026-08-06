import type { Metadata } from 'next';
import './globals.css';
import { AppProviders } from '@/components/providers/AppProviders';

export const metadata: Metadata = {
  title: 'Piyush Wiki - Personal Knowledge Platform',
  description: 'Single-user, local-first, offline-first personal knowledge platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-wiki-bg text-wiki-text">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
