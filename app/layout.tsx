// layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import "@fontsource/noto-serif-bengali/400.css";
import "@fontsource/noto-serif-bengali/700.css";
import { Box } from "@mui/material";

import DrawerAppBar from "./components/app-bar";
import Footer from "./components/footer";
import { ThemeToggleProvider } from "./themeContext";
import CssBaseline from "@mui/material/CssBaseline";
import { ErrorBoundary } from "./components/error-boundary";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ruqyah.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ruqyah - রুকইয়াহ",
    template: "%s | Ruqyah",
  },
  description:
    "Learn Ruqyah (রুকইয়াহ) - Learn Islamic spiritual healing based on Quran and Sunnah. Complete video resources, documentation, and contact information for Raqis (healers).",
  keywords: [
    "ruqyah",
    "রুকইয়াহ",
    "islamic healing",
    "spiritual healing",
    "quran healing",
    "islamic treatment",
    "bangladesh",
    "ruqyah bangladesh",
    "raqi",
    "রাক্বি",
  ],
  authors: [{ name: "Ruqyah Specialist" }],
  creator: "Ruqyah Specialist",
  publisher: "Ruqyah Specialist",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: baseUrl,
    siteName: "Learn Ruqyah",
    title: "Learn Ruqyah - রুকইয়াহ শিখুন",
    description:
      "Learn Ruqyah (রুকইয়াহ) - Learn Islamic spiritual healing based on Quran and Sunnah. Complete video resources, documentation, and contact information for Raqis.",
    images: [
      {
        url: "/Ruqyah-Web-Banner.png",
        width: 1200,
        height: 630,
        alt: "Learn Ruqyah Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Ruqyah - রুকইয়াহ শিখুন",
    description:
      "Learn Ruqyah (রুকইয়াহ) - Learn Islamic spiritual healing based on Quran and Sunnah.",
    images: ["/Ruqyah-Web-Banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      "bn-BD": baseUrl,
      "en-US": baseUrl,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('preferredTheme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.style.colorScheme = 'dark';
                  document.documentElement.classList.add('dark-theme');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeToggleProvider>
          <ErrorBoundary>
            <CssBaseline />
            <DrawerAppBar />
            {children}
            <Footer />
            <Box
              sx={{ display: { xs: "block", sm: "none" }, height: "70px" }}
            />
          </ErrorBoundary>
        </ThemeToggleProvider>
      </body>
    </html>
  );
}
