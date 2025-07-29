import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Parcine Bâche - Location Matériel Événementiel à Dakar",
  description: "Location de tentes, chaises, décoration et matériel événementiel pour mariages, baptêmes et événements d'entreprise à Dakar. Packs personnalisés et prix transparents.",
  keywords: "location tentes dakar, matériel événementiel, mariage dakar, location chaises, décoration événement",
  authors: [{ name: "Parcine Bâche" }],
  openGraph: {
    title: "Parcine Bâche - Location Matériel Événementiel à Dakar",
    description: "Location de tentes, chaises, décoration et matériel événementiel pour vos événements à Dakar",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
