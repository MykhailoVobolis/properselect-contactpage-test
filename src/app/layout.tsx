import React from 'react';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import AppBar from '@/components/AppBar/AppBar';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Footer from '@/components/Footer/Footer';

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
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <AppBar />
          <main style={{ flexGrow: 1 }}>
            <Breadcrumbs />
            {children}
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
