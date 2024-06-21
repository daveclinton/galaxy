import React from "react";

import { Inter } from "@next/font/google";

import "../../styles/globals.scss";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Resana Consulting</title>
      </head>
      <body>
        <div className="mx-auto px-6 py-12">
          <p className="text-white text-4xl font-extrabold text-center mb-10">
            RESANA CONSULTING
          </p>
          <div>{children}</div>
          <p className="text-white mt-24 text-sm text-center">
            Contact Us: info@resana.so Somalia
          </p>
        </div>
      </body>
    </html>
  );
}
