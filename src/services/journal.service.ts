import { Injectable, signal } from '@angular/core';

export interface JournalEntry {
  title: string;
  date: string;
  link: string;
}

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  private entries = signal<JournalEntry[]>([
    {
      title: 'THE FALL OF MINIMALISM',
      date: '12.01.2024',
      link: '#',
    },
    {
      title: 'WHY YOUR BRAND IS BORING',
      date: '11.15.2024',
      link: '#',
    },
    {
      title: 'CASE STUDY: ANTI-DESIGN IN WEB3',
      date: '10.28.2024',
      link: '#',
    },
     {
      title: 'BRUTALISM IS NOT A TREND, IT\'S A REACTION',
      date: '10.05.2024',
      link: '#',
    },
  ]);

  getJournalEntries() {
    return this.entries.asReadonly();
  }
}