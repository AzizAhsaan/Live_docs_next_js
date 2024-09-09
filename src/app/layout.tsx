import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider  publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} appearance={{baseTheme:dark,variables:{colorPrimary:"#3371FF",fontSize:"16px"}}}>
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        {children}
        </Provider>
        </body>
    </html>
    </ClerkProvider>
  );
}
