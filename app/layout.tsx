import Header from "@/components/header";
import "./globals.css";
import type {Metadata} from "next";
import {Inter, Nunito} from "next/font/google";
import ActiveSectionContextProvider, {
  ActiveSectionContext,
} from "@/context/active-section-context";

const inter = Nunito({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Femi Abimbola | Full Stack Developer",
  description: "The Portfolio of Femi Abimbola",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative `}>
        <div className="bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[11rem] w-[31.25rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[35rem] w-[31.25rem] h-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
