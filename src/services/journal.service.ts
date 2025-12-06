import { Injectable, signal } from '@angular/core';

export interface JournalArticle {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
}

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  private articles = signal<JournalArticle[]>([
    {
      slug: 'against-the-gradient',
      date: 'August 16, 2024',
      title: 'Against the Gradient: A Case for Raw Design',
      excerpt: 'The modern web is a sea of soft shadows, gentle gradients, and friendly curves. We argue for the opposite: hard edges, stark contrasts, and unapologetic structure...',
    },
    {
      slug: 'aesthetics-of-system-font',
      date: 'July 28, 2024',
      title: 'The Aesthetics of a System Font',
      excerpt: 'Before you reach for that trendy Google Font, consider the brutalist honesty of the system\'s default. There is beauty in utility, a statement in the default...',
    },
    {
      slug: 'deconstructing-the-feed',
      date: 'June 05, 2024',
      title: 'Deconstructing the Feed: Anti-Algorithmic Visuals',
      excerpt: 'How do we create work that resists the sanitizing effect of the social media feed? A look into composition techniques designed to disrupt the endless scroll...',
    }
  ]);

  getArticles() {
    return this.articles.asReadonly();
  }
}
