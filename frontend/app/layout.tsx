// app/layout.tsx
import { ReactNode } from 'react';
import './globals.css';
import Header from './components/Header';
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
  
      <body>
        <Header/>
        {children}</body>
    </html>
  );
}