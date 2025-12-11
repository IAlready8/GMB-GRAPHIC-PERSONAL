import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { JournalService } from '../../services/journal.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  private route = inject(ActivatedRoute);
  private journalService = inject(JournalService);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map(params => params.get('slug')))
  );

  readonly entry = computed(() => {
    const currentSlug = this.slug();
    if (!currentSlug) {
      return undefined;
    }
    return this.journalService.getEntryBySlug(currentSlug);
  });
}