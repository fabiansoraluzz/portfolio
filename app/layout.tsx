import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Luis Fabian Soraluz | Desarrollador Full Stack Freelance",
  description: "Portfolio profesional de Luis Fabian Soraluz - Desarrollador Full Stack Freelance especializado en .NET, React, Next.js. Soluciones web modernas y escalables.",
  keywords: ["desarrollador full stack", "freelance", ".NET", "React", "Next.js", "TypeScript", "Luis Fabian Soraluz"],
  authors: [{ name: "Luis Fabian Soraluz Torres" }],
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://fabiansoraluz.vercel.app",
    siteName: "Luis Fabian Soraluz - Portfolio",
    title: "Luis Fabian Soraluz | Desarrollador Full Stack Freelance",
    description: "Portfolio profesional - Soluciones web modernas y eficientes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luis Fabian Soraluz - Desarrollador Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Fabian Soraluz | Desarrollador Full Stack",
    description: "Portfolio profesional - Desarrollador Full Stack Freelance",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}