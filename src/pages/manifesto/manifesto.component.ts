import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './manifesto.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManifestoComponent {}