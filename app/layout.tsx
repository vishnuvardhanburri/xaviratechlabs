import '../src/styles/globals.css';
import { Navbar } from '@/components/NextNavbar';
import { LiveChat } from '@/components/LiveChat';
import { ErrorBoundary } from '../components/ErrorBoundary';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Xavira | Autonomous Outbound Infrastructure - Built by Engineers</title>
        <meta
          name="description"
          content="Xavira is infrastructure for autonomous outbound, built by engineers from VishnuLabs. 34% reply rates, deterministic execution, 99.99% uptime. From $14K."
        />
        <meta
          name="keywords"
          content="outbound infrastructure, autonomous sales, B2B outbound, email automation, enterprise sales infrastructure"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b0b0f" />
      </head>
      <body className="bg-[#0b0b0f] text-white antialiased">
        <Navbar />
        <main className="pt-20">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>
        <LiveChat />
      </body>
    </html>
  );
}
