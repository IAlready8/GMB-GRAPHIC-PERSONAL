import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
