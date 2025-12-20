import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CapabilityService } from '../../services/capability.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './capabilities.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapabilitiesComponent {
  private capabilityService = inject(CapabilityService);
  capabilities = this.capabilityService.getCapabilities();
}