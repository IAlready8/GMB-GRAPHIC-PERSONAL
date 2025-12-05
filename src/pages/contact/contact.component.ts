import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
