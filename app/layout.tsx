import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Do Plannr",
  description: "A todo app for the web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="svg-background">
            <div
              className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    
  "
            >
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
