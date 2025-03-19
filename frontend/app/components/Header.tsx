// components/Header.tsx
import { Image } from 'antd';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-3 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg border-b border-blue-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Logos */}
          <div className="flex items-center space-x-6 w-1/4">
            <Link href="https://www.india.gov.in/" className="transition-transform hover:scale-105">
              <Image
                src="/images/header/left1_ashok.png"
                alt="Logo 1"
                title="अशोक स्तंभ"
                className="w-16 h-auto"
                preview={false}
              />
            </Link>
            <Link href="https://iitbhu.ac.in/" className="transition-transform hover:scale-105">
              <Image
                src="/images/header/left2_iit_logo.png"
                alt="Logo 3"
                title="iitbhu"
                className="w-12 h-auto transform scale-150 ml-6 transition-transform duration-300"
                preview={false}
              />
            </Link>
          </div>

          {/* Middle Section */}
          <div className="text-center w-1/2 px-4">
            <h2 className="text-2xl font-bold text-blue-800 tracking-wide">Decision Support System</h2>
            <div className="w-full overflow-hidden mt-1">
              <p className="text-sm text-blue-600 font-medium whitespace-nowrap overflow-hidden relative">
                <span className="inline-block animate-marquee">
                  Small Rivers Management Tool (SRMT) for Holistic Water Resources
                  Management in India
                </span>
              </p>
            </div>
          </div>

          {/* Right Logos */}
          <div className="flex items-center justify-end space-x-6 w-1/4">
            <Link href="https://www.slcrvaranasi.com/" className="transition-transform hover:scale-105">
              <Image
                src="/images/header/right1_slcr.png"
                alt="Right Logo"
                title="Smart Laboratory on Clean River"
                className="max-w-[120px] h-auto"
                preview={false}
              />
            </Link>
            <Link href="https://nmcg.nic.in/" className="transition-transform hover:scale-105">
              <Image
                src="/images/header/right2_namami_ganga.gif"
                alt="Logo 3"
                title="Namami Gange"
                className="w-16 h-auto"
                preview={false}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}