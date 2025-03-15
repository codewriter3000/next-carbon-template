import type { Metadata } from "next";
import "./globals.scss";

import { Providers } from './providers';

export const metadata: Metadata = {
  title: "IBM Carbon Next.JS Template",
  description: "A useful template for working with Next.JS along with IBM Carbon components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
