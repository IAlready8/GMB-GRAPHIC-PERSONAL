import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeminiService } from '../../services/gemini.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manifesto.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManifestoComponent {
  private geminiService = inject(GeminiService);

  poem = signal<string | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  async generateNewThought(): Promise<void> {
    this.loading.set(true);
    this.error.set(null);
    this.poem.set(null);

    try {
      const generatedPoem = await this.geminiService.generateThought();
      this.poem.set(generatedPoem);
    } catch (e: any) {
      this.error.set(typeof e === 'string' ? e : 'An unknown error occurred.');
    } finally {
      this.loading.set(false);
    }
  }
}
