import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
  name: "Kanzoto",
  short_name: "Kanzoto",
  description: "Kanzoto est une agence web humaine qui propose des solutions digitales créatives et expertes.",
  start_url: "/",
  display: "standalone",
  background_color: "#1A79F9",
  theme_color: "#1A79F9",
  icons: [
    {
      src: "/icons/icon-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/icons/icon-512x512.png",
      sizes: "512x512",
      type: "image/png"
    },
    {
      src: "/icons/icon-192x192.svg",
      sizes: "192x192",
      type: "image/svg+xml"
    },
    {
      src: "/icons/icon-512x512.svg",
      sizes: "512x512",
      type: "image/svg+xml"
    }
  ]
}
}