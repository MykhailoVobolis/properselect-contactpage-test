import React from 'react';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import AppBar from '@/components/AppBar/AppBar';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';

import './globals.css';

const font = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'PROPERSELECT',
  description: 'Super description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AppBar />
        <main>
          <Breadcrumbs />
          {children}
        </main>
      </body>
    </html>
  );
}
