import { ReactNode } from 'react';
import type { Metadata } from 'next';

import './globals.css';
import { Footer, Navbar } from '@components';

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={'relative'}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
