import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { JournalService } from '../../services/journal.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './journal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JournalComponent {
  private journalService = inject(JournalService);
  entries = this.journalService.getJournalEntries();
}