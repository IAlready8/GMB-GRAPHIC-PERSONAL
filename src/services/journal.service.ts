import { Injectable, signal } from '@angular/core';

export interface JournalEntry {
  title: string;
  date: string;
  slug: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  private entries = signal<JournalEntry[]>([
    {
      title: 'THE FALL OF MINIMALISM',
      date: '12.01.2024',
      slug: 'the-fall-of-minimalism',
      content: `<p>Clean lines. White space. Soulless voids. Minimalism promised clarity but delivered sterility. It is the anesthetic of design, a numbing agent against the beautiful chaos of existence.</p><p>We are not here to whisper. We are here to roar. We trade empty space for raw energy, sanitization for substance. The clean slate is a lie. We build on rubble, with concrete and code, and the cracks are where the light gets in. This isn't a retreat from complexity; it's a full-frontal assault on apathy.</p>`,
    },
    {
      title: 'WHY YOUR BRAND IS BORING',
      date: '11.15.2024',
      slug: 'why-your-brand-is-boring',
      content: `<p>You followed the rules. You used the friendly sans-serif. You picked the safe blue. You wrote the inoffensive copy. And you became invisible.</p><p>Your brand is a ghost, a polite nod in a crowded room. It has no texture, no friction, no pulse. It asks for nothing and receives the same. To be remembered, you must risk being disliked. You must have a point of view sharp enough to cut. Stop trying to please everyone. Start by provoking someone. The opposite of love is not hate; it's indifference. And your brand is dying of it.</p>`,
    },
    {
      title: 'CASE STUDY: ANTI-DESIGN IN WEB3',
      date: '10.28.2024',
      slug: 'case-study-anti-design-in-web3',
      content: `<p>Web3 shouted about decentralization, about breaking the mold, but then draped itself in the same corporate gloss it claimed to oppose. Polished landing pages, slick interfaces, hollow promises. A revolution in pajamas.</p><p>Anti-design is the necessary corrective. It is the chaotic, user-generated, often ugly truth of a system still being built. It's raw HTML, clashing colors, and experiences that prioritize function over finish. It is a visual dialectic that reflects the true state of the technology: volatile, experimental, and brutally honest. This isn't poor UX; it's a transparent UX.</p>`,
    },
     {
      title: 'BRUTALISM IS NOT A TREND, IT\'S A REACTION',
      date: '10.05.2024',
      slug: 'brutalism-is-not-a-trend',
      content: `<p>To call brutalism a 'trend' is to misunderstand its very core. It is not a fleeting aesthetic choice. It is a philosophical stance. A reaction. A rejection.</p><p>It was born from post-war necessity, a raw and honest use of material to rebuild a shattered world. Today, it is reborn from digital saturation, a raw and honest use of structure to cut through a cluttered screen. It is the antithesis of ornamentation. It is the celebration of the skeleton, the raw code, the load-bearing beam. It is not here to be liked. It is here to stand.</p>`,
    },
    {
      title: 'MOODBOARD CREATIVITY IS A CAGE',
      date: '09.15.2024',
      slug: 'moodboard-creativity-is-a-cage',
      content: `<p>You pin and you scroll. You collect and you curate. You build a digital wall of other people's work and call it 'inspiration'. It is not inspiration. It is a cage.</p><p>The moodboard is a sedative. It homogenizes thought, sanding down the sharp edges of a unique idea until it fits comfortably among the accepted aesthetics of the now. It is a feedback loop of imitation. Your 'vision' becomes a collage of pre-approved trends. We do not build from moodboards. We build from manifestos. We dig, we argue, we discover a core truth, and we build from that singularity. The most powerful ideas are not found; they are forged in the absence of a safety net.</p>`,
    },
    {
      title: 'USABILITY IS A WEAKNESS',
      date: '08.22.2024',
      slug: 'usability-is-a-weakness',
      content: `<p>The obsession with 'seamless' and 'intuitive' design has created a generation of digital cowards. Interfaces that hold your hand, that demand nothing of you, that anticipate your every thought before you've had it.</p><p>This is not empowerment. It is infantilization. We believe in friction. We believe in interfaces that demand you to think, to learn, to engage. A tool that can be mastered is more valuable than one that can be merely used. The path of least resistance leads to a place of no significance. We design for the ascent, not the gentle slope.</p>`,
    },
    {
      title: 'CODE IS CONCRETE',
      date: '07.30.2024',
      slug: 'code-is-concrete',
      content: `<p>Designers are taught to see code as a mere vehicle for their visuals. A necessary evil to be handed off to engineers. This is a profound error. Code is not the container. Code is the material.</p><p>It has grain, it has weight, it has tension. It can be poured, shaped, and stressed. Writing CSS is like mixing concrete. Javascript is the rebar, giving it structure and strength. HTML is the foundational formwork. To ignore the nature of the material is to create fragile, superficial structures. We don't just design what it looks like. We build the thing itself. The architecture is the aesthetic.</p>`,
    },
  ]);

  getJournalEntries() {
    return this.entries.asReadonly();
  }

  getEntryBySlug(slug: string): JournalEntry | undefined {
    return this.entries().find(entry => entry.slug === slug);
  }
}