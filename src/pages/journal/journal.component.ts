import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalService } from '../../services/journal.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './journal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JournalComponent {
  private journalService = inject(JournalService);
  articles = this.journalService.getArticles();
}
