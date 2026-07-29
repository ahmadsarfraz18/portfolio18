import { MetadataRoute } from 'next';
import { portfolioData } from "@/data/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${portfolioData.hero.name} | ${portfolioData.hero.title}`,
    short_name: portfolioData.hero.name,
    description: portfolioData.hero.subtitle,
    start_url: '/',
    display: 'standalone',
    background_color: '#080808',
    theme_color: '#080808',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
