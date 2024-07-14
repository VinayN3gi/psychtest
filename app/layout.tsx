import type { Metadata } from "next";
import { Inter ,EB_Garamond,Roboto} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Provider from "./components/Provider";
import Navbar from "./components/Navbar";
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"] });
const ebGaramond = EB_Garamond({ subsets: ["latin"] ,weight:['400']});
const roboto = Roboto({ subsets: ["latin"] ,weight:['400']});

export const metadata: Metadata = {
  title: "AcadMate",
  description: "AcadMate is a platform that helps students to find the best career path for them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
      <body className={cn('min-h-screen antialiased grainy',ebGaramond.className)}>
        <Navbar/>
        {children}
        </body>
      </Provider> 
    </html>
  );
}
