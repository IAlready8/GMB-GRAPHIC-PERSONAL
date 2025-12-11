import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
// FIX: Use modern `rxjs` import for the map operator.
import { map } from 'rxjs';
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

  // FIX: Switched from `paramMap` to `params` to resolve type errors.
  // The original code with `paramMap` resulted in `unknown` types. Using `params`
  // with bracket access correctly infers the slug type and fixes all related errors.
  private readonly slug = toSignal(
    this.route.params.pipe(map(params => params['slug']))
  );

  readonly entry = computed(() => {
    const currentSlug = this.slug();
    if (!currentSlug) {
      return undefined;
    }
    // FIX: The type of `currentSlug` is now correctly inferred as `string` inside this block,
    // which fixes the error when calling `getEntryBySlug`.
    return this.journalService.getEntryBySlug(currentSlug);
  });
}
