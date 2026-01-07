import { Injectable, signal } from '@angular/core';

export interface GalleryItem {
  title: string;
  year: string;
  link: string;
  gridArea?: string;
  videoSrc?: string;
  imageSrc?: string;
  capabilities: string[];
}

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private items = signal<GalleryItem[]>([
    {
      title: 'SPOWREEL',
      year: '24',
      link: 'https://www.gmbgraphic.com/projects/showreel',
      gridArea: '11 / 14 / span 6 / span 8',
      videoSrc: 'https://jcz25Fazaz.flowdrivecdn.com/file-8f54793b-8f4d-4eff-b2b2-db8b5e82d94c',
      capabilities: ['motion-3d', 'art-direction', 'film-editorial', 'sound-design-score'],
    },
    {
      title: 'FIXUS',
      year: '2024',
      link: 'https://ai-tool-website-frontend-an7lkdg8r-itsokialready8.vercel.app/',
      gridArea: '6 / 18 / span 4 / span 5',
      imageSrc: 'https://jcz25fazaz.flowdrivecdn.com/achQkHCPxB',
      capabilities: ['digital-experiences', 'product-design-ui-ux', 'ai-generative-systems'],
    },
    {
      title: 'DEV-TOOLS',
      year: '2025',
      link: 'https://dev-tools-3zvqhnezp-itsokialready8.vercel.app/#/$0',
      gridArea: '6 / 30 / span 4 / span 4',
      imageSrc: 'https://cdn.prod.website-files.com/6704732ba4d30828d673de05/672ba9a56a2802de4de4b978_KIDA-POSTER-IG.webp',
      capabilities: ['art-direction', 'print-packaging', 'type-design'],
    },
    {
      title: 'Doechii & JT - Alter Ego',
      year: '2024',
      link: 'https://www.gmbgraphic.com/projects/doechii-alter-ego',
      gridArea: '7 / 2 / span 6 / span 5',
      imageSrc: 'https://cdn.prod.website-files.com/6704732ba4d30828d673de05/677fabaac24647ca24967d1e_02.webp',
      capabilities: ['visual-identity', 'motion-3d', 'art-direction'],
    },
    {
      title: 'RealMultiLLM',
      year: '2025',
      link: 'https://real-multi-llm.vercel.app/',
      gridArea: '10 / 7 / span 4 / span 6',
      imageSrc: 'https://jcz25fazaz.flowdrivecdn.com/D8HRJ19r4GevFzAC9umm3',
      capabilities: ['digital-experiences', 'creative-coding', 'ai-generative-systems', 'systems-architecture'],
    },
    {
      title: 'GITHUB',
      year: '2024',
      link: 'https://github.com/IAlready8?tab=repositories$0',
      gridArea: '11 / 22 / span 6 / span 6',
      imageSrc: 'https://jcz25fazaz.flowdrivecdn.com/ST1TvExnJf',
      capabilities: ['visual-identity', 'art-direction', 'film-editorial'],
    },
    {
      title: 'AntsLive - Captain Ants',
      year: '2023',
      link: 'https://www.gmbgraphic.com/projects/antslive-captain-ants',
      gridArea: '12 / 2 / span 5 / span 4',
      imageSrc: 'https://cdn.prod.website-files.com/6704732ba4d30828d673de05/672ba959e510ddef1cf9269a_POSTER_LAYERED-WITH-CREDITS.webp',
      capabilities: ['visual-identity', 'print-packaging', 'narrative-copywriting'],
    },
    {
      title: 'Personal Portfolio',
      year: '2024',
      link: 'https://personal-portfolio-local-m2.vercel.app/',
      gridArea: '15 / 7 / span 4 / span 5',
      imageSrc: 'https://jcz25fazaz.flowdrivecdn.com/Z9HZCA3RbT',
      capabilities: ['digital-experiences', 'creative-coding', 'product-design-ui-ux'],
    },
    {
      title: 'Rumble Zine',
      year: '2025',
      link: 'https://www.gmbgraphic.com/projects/rumble-zine',
      gridArea: '7 / 25 / span 5 / span 4',
      imageSrc: 'https://cdn.prod.website-files.com/6704732ba4d30828d673de05/68c3f259f6c519def2fad222_Artboard%201.jpg',
      capabilities: ['print-packaging', 'art-direction', 'type-design', 'content-strategy'],
    },
    {
      title: 'AntsLive - Cutlery',
      year: '2024',
      link: 'https://www.gmbgraphic.com/projects/antslive-cutlery',
      gridArea: '17 / 1 / span 5 / span 5',
      imageSrc: 'https://jcz25fazaz.flowdrivecdn.com/UXqPpqVgud',
      capabilities: ['motion-3d', 'film-editorial', 'sound-design-score'],
    },
    {
      title: 'Äyanna - In A Perfect World',
      year: '2024',
      link: 'https://www.gmbgraphic.com/projects/ayanna-in-a-perfect-world',
      gridArea: '19 / 13 / span 4 / span 6',
      imageSrc: 'https://cdn.prod.website-files.com/6704732ba4d30828d673de05/672ba9def43ec118df6d1244_videoframe_1561.webp',
      capabilities: ['visual-identity', 'art-direction', 'narrative-copywriting'],
    },
    {
      title: 'Yungblud - Low Life',
      year: '2023',
      link: 'https://www.gmbgraphic.com/projects/yungblud-low-life',
      gridArea: '16 / 28 / span 4 / span 5',
      imageSrc: 'https://cdn.prod.website-files.com/6704732ba4d30828d673de05/672baa1d3a55171fbd9ef922_YUNGBLUD-POSTER-FINAL.webp',
      capabilities: ['print-packaging', 'visual-identity', 'brand-strategy'],
    },
     {
      title: 'James Tonic - Stuck in LA',
      year: '2024',
      link: 'https://www.gmbgraphic.com/projects/james-tonic',
      gridArea: '10 / 29 / span 6 / span 6',
      imageSrc: 'https://cdn.prod.website-files.com/6704732ba4d30828d673de05/67811766da3a629ac2260a41_JT-MASTER-copy_01.webp',
      capabilities: ['art-direction', 'visual-identity', 'film-editorial'],
    },
    {
      title: 'That Door',
      year: '2024',
      link: 'https://www.gmbgraphic.com/projects/that-door',
      gridArea: '17 / 20 / span 7 / span 7',
      imageSrc: 'https://jcz25fazaz.flowdrivecdn.com/M7cjQlDUU4',
      capabilities: ['motion-3d', 'immersive-ar-vr', 'physical-installations'],
    },
    {
      title: 'Rimowa 868',
      year: '2025',
      link: 'https://www.gmbgraphic.com/projects/rimowa-868-by-alice-schillaci',
      gridArea: '7 / 12 / span 4 / span 6',
      imageSrc: 'https://jcz25fazaz.flowdrivecdn.com/nJgrQyrdBR',
      capabilities: ['brand-strategy', 'art-direction', 'content-strategy'],
    },
  ]);

  getGalleryItems() {
    return this.items.asReadonly();
  }
}