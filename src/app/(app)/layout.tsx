import React from "react";
import "./globals.scss";
import { Providers } from "./provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FVTVRA | IN GAFFER WE TRVST",
  description: "COMPACT MOVIL GRIP & ELECTRIC VAN",
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default Layout;
