import type { Metadata } from "next";
import '@styles/globals.css'
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";


export const metadata: Metadata = {
  title: "OfficeX",
  description: "An online shop selling office products",
  manifest: '/manifest.json'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
           <Navbar />
            {children}  
        </Provider>
      </body>
    </html>
  );
}
