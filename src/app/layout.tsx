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
      	<h1 className="text-red-100">Hello</h1>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
