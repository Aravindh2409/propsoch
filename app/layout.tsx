import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Propsoch - Navigate Your Home Purchase Intelligently',
  description:
    'Expert guidance + AI-powered insights for intelligent homebuyers. 1000+ homes delivered in the last 12 months. Trusted by homebuyers from Google, Amazon, Peak XV and more.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    title: 'Propsoch - Navigate Your Home Purchase Intelligently',
    description:
      'Expert guidance + AI-powered insights for intelligent homebuyers.',
    url: 'https://propsoch.com',
    siteName: 'Propsoch',
    images: [
      {
        url: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Propsoch - Navigate Your Home Purchase Intelligently',
      },
    ],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://propsoch.com" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 border-t border-slate-800">
          {/* Background gradient */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
          </div>

          <div className="section-container relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏡</span>
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Propsoch
                  </span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Navigate your home purchase intelligently with expert guidance and AI-powered insights.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-6 uppercase tracking-wide text-slate-300 hover:text-blue-400 transition-colors">
                  Services
                </h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li>
                    <a href="#services" className="hover:text-blue-400 transition-colors duration-300">
                      Guided Home Buying
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-blue-400 transition-colors duration-300">
                      Peace of Mind Report
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-blue-400 transition-colors duration-300">
                      Compare Properties
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-6 uppercase tracking-wide text-slate-300 hover:text-blue-400 transition-colors">
                  Company
                </h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li>
                    <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-6 uppercase tracking-wide text-slate-300 hover:text-blue-400 transition-colors">
                  Legal
                </h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li>
                    <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-6">
              <p>&copy; 2026 Thinkr Proptech Pvt. Ltd. All rights reserved.</p>
              <div className="flex gap-8">
                <a
                  href="#"
                  aria-label="Follow Propsoch on Instagram"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  aria-label="Follow Propsoch on LinkedIn"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  aria-label="Follow Propsoch on YouTube"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
