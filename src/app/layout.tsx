import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/appProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import { Roboto, Cormorant_Garamond } from "next/font/google";

const robotoThin = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto-thin",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600","700"],
  subsets: ["latin"],
  variable: "--font-bell",
  display: "swap",
});


// Carga fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roggman Consulting",
  description:
    "En Roggman Consulting contamos con agentes comerciales especializados que representan a su empresa en países de habla alemana. Organizamos reuniones con proveedores, clientes y socios estratégicos del sector de su preferencia, impulsando la expansión de sus productos en el mercado de destino. Nuestro servicio incluye un seguimiento constante del proyecto y acompañamiento durante toda la fase de internacionalización, apoyado por un equipo multidisciplinario que facilita la toma de decisiones y maximiza las oportunidades de crecimiento.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${inter.variable}
          ${robotoThin.variable}
          ${cormorant.variable}
          font-sans antialiased
        `}
      >
        
          <AppProvider>
            <Header />
            {children}
            <Footer/>
          </AppProvider>
        
      </body>
    </html>
  );
}
