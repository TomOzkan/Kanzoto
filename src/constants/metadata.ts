import { Metadata } from "next";

export const commonMetadata: Metadata = {
  applicationName: "Kanzoto",
  creator: "Tom Ozkan",
  metadataBase: new URL("https://kanzoto.com/"),
  title: {
    template: "%s - Kanzoto",
    default: "Kanzoto",
  },
  alternates: {
    canonical: "https://kanzoto.com/",
  },
  authors: { name: "Tom Ozkan" },
  openGraph: {
    title: "Kanzoto",
    type: "website",
    url: "https://kanzoto.com/",
   /*  images: [
      {
        url: "https://kanzoto.com/img/websiteimg.png",
        width: "1200",
        height: "630",
        alt: "Carte de Kanzoto",
      },
    ], */
    description:
      "Kanzoto est une agence web humaine qui propose des solutions digitales créatives et expertes.",
    siteName: "Kanzoto",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Kanzoto",
    title: "Kanzoto",
    description:
      "Kanzoto est une agence web humaine qui propose des solutions digitales créatives et expertes.",
    creator: "@TomOkn",
    /*  images: 
      {
        url: "https://kanzoto.com/img/websiteimg.png",
        width: "1200",
        height: "630",
        alt: "Carte de Kanzoto",
      },
     */
  },
};

export const metadataHome: Metadata = {
  title: "Kanzoto",
  description: "Kanzoto est une agence web humaine qui propose des solutions digitales créatives et expertes.",
  keywords: ["web agency", "creative", "digital", "developpement", "kanzoto", "web", "Tom Ozkan"],
};