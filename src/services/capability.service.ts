import { Injectable, signal } from '@angular/core';

export interface ContentSection {
  type: 'text' | 'image' | 'text-with-image';
  title?: string;
  content?: string;
  imageUrl?: string;
  imageAlt?: string;
  layout?: 'image-left' | 'image-right';
}

export interface Capability {
  title: string;
  description: string;
  slug: string;
  sections?: ContentSection[];
}

@Injectable({
  providedIn: 'root',
})
export class CapabilityService {
  private capabilities = signal<Capability[]>([
    {
      title: 'VISUAL IDENTITY',
      slug: 'visual-identity',
      description: 'Logos that are scars, not badges. Brands that bleed authenticity. We build identities that are felt, not just seen.',
      sections: [
        {
          type: 'text-with-image',
          title: 'BEYOND THE LOGO',
          content: '<p>An identity is more than a mark. It\'s a system of expression—typography, color, imagery, and tone of voice. We build comprehensive visual languages that are flexible, ownable, and built to last in any environment, from a tiny favicon to a towering billboard.</p>',
          imageUrl: 'https://picsum.photos/seed/visual-identity-1/800/600',
          imageAlt: 'Abstract visual identity concept',
          layout: 'image-right'
        },
        {
          type: 'image',
          imageUrl: 'https://picsum.photos/seed/visual-identity-2/1200/600',
          imageAlt: 'Multiple brand touchpoints shown in a collage'
        },
        {
            type: 'text',
            title: 'STRATEGY-DRIVEN',
            content: '<p>Every visual choice is rooted in strategy. We don\'t decorate; we communicate. Our process begins with understanding the core of a brand to ensure the final identity is not just aesthetically powerful, but also intellectually sound and commercially effective.</p>'
        }
      ]
    },
    {
      title: 'DIGITAL EXPERIENCES',
      slug: 'digital-experiences',
      description: 'Websites that are hostile to mediocrity. Interfaces that challenge, not coddle. We create digital spaces that are raw and unforgettable.',
      sections: [
        {
          type: 'text',
          title: 'STRUCTURE AS STATEMENT',
          content: '<p>Our approach to web design prioritizes brutalist honesty and function. We believe the structure of a site—the grid, the flow, the raw HTML—is as much a part of the brand message as the content itself. We build experiences that are direct, fast, and unapologetically digital.</p>'
        },
        {
            type: 'image',
            imageUrl: 'https://picsum.photos/seed/digital-experience-1/1200/700',
            imageAlt: 'Wireframe of a website with structural grid lines'
        },
        {
            type: 'text-with-image',
            title: 'INTERACTION WITH INTENT',
            content: '<p>We use motion and interactivity not as garnish, but as tools to enhance meaning and guide users. From subtle micro-interactions to bold, immersive animations, every element of movement serves a purpose, creating an experience that is engaging and intuitive, even in its complexity.</p>',
            imageUrl: 'https://picsum.photos/seed/digital-experience-2/800/600',
            imageAlt: 'Interactive user interface element glowing',
            layout: 'image-left'
        }
      ]
    },
    {
      title: 'MOTION & 3D',
      slug: 'motion-3d',
      description: 'Movement that disrupts. 3D that feels real enough to touch, to break. We make pixels punch.',
    },
    {
      title: 'ART DIRECTION',
      slug: 'art-direction',
      description: 'We don\'t follow trends, we set fires. Our direction is a compass pointing away from the conventional.',
    },
    {
      title: 'PRINT & PACKAGING',
      slug: 'print-packaging',
      description: 'We don\'t make boxes; we make artifacts. Tangible objects with weight and texture. We treat paper and ink with the same raw intensity as pixels.',
    },
    {
      title: 'CREATIVE CODING',
      slug: 'creative-coding',
      description: 'Code is our chisel. We build generative systems and interactive installations that are alive, unpredictable, and brutally honest. This is art born from logic.',
    },
    {
      title: 'NARRATIVE & COPYWRITING',
      slug: 'narrative-copywriting',
      description: 'Words as weapons. We write copy that cuts, that sticks, that builds worlds and burns down old ones. Your story isn\'t told; it\'s forged.',
    },
    {
      title: 'IMMERSIVE (AR/VR)',
      slug: 'immersive-ar-vr',
      description: 'Reality is a suggestion. We build new ones. Digital layers over the physical world, or entirely new spaces to inhabit. We don\'t escape reality; we overwrite it.',
    },
    {
      title: 'AI & GENERATIVE SYSTEMS',
      slug: 'ai-generative-systems',
      description: 'We don\'t just use tools; we create collaborators. We weaponize AI to generate visuals, text, and systems that are unpredictable, chaotic, and beyond human conception.',
    },
    {
      title: 'BRAND STRATEGY',
      slug: 'brand-strategy',
      description: 'A look is temporary. An identity is permanent. We architect the core truth of a brand—its position, its voice, its reason for war. We build foundations of concrete, not sand.',
    },
    {
      title: 'PHYSICAL INSTALLATIONS',
      slug: 'physical-installations',
      description: 'Bringing the digital into the dirt. We design and build interactive installations for spaces, events, and galleries. Experiences you can touch, walk through, and feel.',
    },
    {
      title: 'TYPE DESIGN',
      slug: 'type-design',
      description: 'Letters as architecture. We design custom typefaces that are as structural and opinionated as the brands they speak for. This is language with a backbone.'
    },
    {
      title: 'DATA VISUALIZATION',
      slug: 'data-visualization',
      description: 'Turning raw data into raw meaning. We create visualizations that are not just informative, but visceral and provocative. We make numbers tell a story that hits you in the gut.'
    },
    {
      title: 'SYSTEMS ARCHITECTURE',
      slug: 'systems-architecture',
      description: 'Building the unbreakable foundation. We design and implement robust, scalable digital infrastructures that power our experiences. The skeleton that lets the beast run.'
    },
    {
      title: 'PRODUCT DESIGN (UI/UX)',
      slug: 'product-design-ui-ux',
      description: 'Interfaces with intent. We design user experiences that are direct, efficient, and unapologetically functional. We don\'t build for comfort; we build for purpose.'
    },
    {
      title: 'CONTENT STRATEGY',
      slug: 'content-strategy',
      description: 'A plan of attack for every word and image. We define what you say, where you say it, and why it matters, ensuring every piece of content is a weapon for your brand.'
    },
    {
      title: 'FILM & EDITORIAL',
      slug: 'film-editorial',
      description: 'Storytelling through the lens and the cut. We direct, shoot, and edit films that capture the raw energy of a subject. Every frame has a purpose; every cut, a rhythm.'
    }
  ]);

  getCapabilities() {
    return this.capabilities.asReadonly();
  }

  getCapabilityBySlug(slug: string | undefined): Capability | undefined {
    if (!slug) return undefined;
    return this.capabilities().find(c => c.slug === slug);
  }
}