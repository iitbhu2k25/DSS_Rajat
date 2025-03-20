// app/layout.tsx
import { ReactNode } from 'react';
import './globals.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
  
      <body>
        <Header/>
        <Navbar/>
        {children}</body>
    </html>
  );
}