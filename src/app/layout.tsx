import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Web Camera Test',
  description: 'Web camera testing application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
