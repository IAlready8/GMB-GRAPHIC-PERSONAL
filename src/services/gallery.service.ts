import { Injectable, signal } from '@angular/core';

export interface GalleryItem {
  title: string;
  year: string;
  link: string;
  gridArea: string;
  videoSrc?: string;
  imageSrc?: string;
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
      gridArea: '7 / 14 / span 6 / span 8',
      videoSrc: 'https://jcz25Fazaz.flowdrivecdn.com/file-8f54793b-8f4d-4eff-b2b2-db8b5e82d94c',
    },
    {
      title: 'Konyikeh - Lie To Me',
      year: '2024',
      link: 'https://www.gmbgraphic.com/projects/konyikeh-lie-to-me',
      gridArea: '2 / 18 / span 4 / span 5',
      imageSrc: 'https://jcz25fazaz.flowdrivecdn.com/achQkHCPxB',
    },
    {
      title: 'Kidakudz ft Boj - Banger',
      year: '2024',
      link: 'https://www.gmbgraphic.com/projects/kidakudz-ft-boj-banger',
      gridArea: '2 / 30 / span 4 / span 4',
      imageSrc: 'https://cdn.prod.website-files.com/6704732ba4d30828d673de05/672ba9a56a2802de4de4b978_KIDA-POSTER-IG.webp',
    },
    {
      title: 'Doechii & JT - Alter Ego',
      year: '2024',
      link: 'https://www.gmbgraphic.com/projects/doechii-alter-ego',
      gridArea: '3 / 2 / span 6 / span 5',
      imageSrc: 'https://cdn.prod.website-files.com/6704732ba4d30828d673de05/677fabaac24647ca24967d1e_02.webp',
    },
    {
      title: 'RealMultiLLM',
      year: '2025',
      link: 'https://real-multi-llm.vercel.app/',
      gridArea: '6 / 7 / span 4 / span 6',
      imageSrc: 'https://jcz25fazaz.flowdrivecdn.com/D8HRJ19r4GevFzAC9umm3',
    },
    {
      title: 'Marina Satti - Lalalala',
      year: '2024',
      link: 'https://www.gmbgraphic.com/projects/marina-satti-lalalala',
      gridArea: '7 / 22 / span 6 / span 6',
      imageSrc: 'https://jcz25fazaz.flowdrivecdn.com/ST1TvExnJf',
    },
    {
      title: 'AntsLive - Captain Ants',
      year: '2023',
      link: 'https://www.gmbgraphic.com/projects/antslive-captain-ants',
      gridArea: '8 / 2 / span 5 / span 4',
      imageSrc: 'https://cdn.prod.website-files.com/6704732ba4d30828d673de05/672ba959e510ddef1cf9269a_POSTER_LAYERED-WITH-CREDITS.webp',
    },
    {
      title: 'Personal Portfolio',
      year: '2024',
      link: 'https://personal-portfolio-local-m2.vercel.app/',
      gridArea: '11 / 7 / span 4 / span 5',
      imageSrc: 'https://jcz25fazaz.flowdrivecdn.com/Z9HZCA3RbT',
    },
    {
      title: 'Rumble Zine',
      year: '2025',
      link: 'https://www.gmbgraphic.com/projects/rumble-zine',
      gridArea: '3 / 25 / span 5 / span 4',
      imageSrc: 'https://cdn.prod.website-files.com/6704732ba4d30828d673de05/68c3f259f6c519def2fad222_Artboard%201.jpg',
    },
    {
      title: 'AntsLive - Cutlery',
      year: '2024',
      link: 'https://www.gmbgraphic.com/projects/antslive-cutlery',
      gridArea: '13 / 1 / span 5 / span 5',
      imageSrc: 'https://jcz25fazaz.flowdrivecdn.com/UXqPpqVgud',
    },
    {
      title: 'Äyanna - In A Perfect World',
      year: '2024',
      link: 'https://www.gmbgraphic.com/projects/ayanna-in-a-perfect-world',
      gridArea: '15 / 13 / span 4 / span 6',
      imageSrc: 'https://cdn.prod.website-files.com/6704732ba4d30828d673de05/672ba9def43ec118df6d1244_videoframe_1561.webp',
    },
    {
      title: 'Yungblud - Low Life',
      year: '2023',
      link: 'https://www.gmbgraphic.com/projects/yungblud-low-life',
      gridArea: '12 / 28 / span 4 / span 5',
      imageSrc: 'https://cdn.prod.website-files.com/6704732ba4d30828d673de05/672baa1d3a55171fbd9ef922_YUNGBLUD-POSTER-FINAL.webp',
    },
     {
      title: 'James Tonic - Stuck in LA',
      year: '2024',
      link: 'https://www.gmbgraphic.com/projects/james-tonic',
      gridArea: '6 / 29 / span 6 / span 6',
      imageSrc: 'https://cdn.prod.website-files.com/6704732ba4d30828d673de05/67811766da3a629ac2260a41_JT-MASTER-copy_01.webp',
    },
    {
      title: 'That Door',
      year: '2024',
      link: 'https://www.gmbgraphic.com/projects/that-door',
      gridArea: '12 / 20 / span 6 / span 6',
      imageSrc: 'https://jcz25fazaz.flowdrivecdn.com/M7cjQlDUU4',
    },
    {
      title: 'Rimowa 868',
      year: '2025',
      link: 'https://www.gmbgraphic.com/projects/rimowa-868-by-alice-schillaci',
      gridArea: '3 / 12 / span 4 / span 6',
      imageSrc: 'https://jcz25fazaz.flowdrivecdn.com/nJgrQyrdBR',
    },
  ]);

  getGalleryItems() {
    return this.items.asReadonly();
  }
}
