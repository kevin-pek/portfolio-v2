import { MetadataRoute } from "next"
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kevin Pek",
    short_name: "Kevin Pek",
    description: "Kevin Pek's Website",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}