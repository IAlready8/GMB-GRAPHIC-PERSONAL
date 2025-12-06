import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './capabilities.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapabilitiesComponent {}