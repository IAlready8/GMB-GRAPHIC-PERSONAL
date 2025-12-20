import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { CapabilityService } from '../../services/capability.service';
import { GalleryService } from '../../services/gallery.service';
import { GalleryItemComponent } from '../../components/gallery-item/gallery-item.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, GalleryItemComponent],
  templateUrl: './capability-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapabilityDetailComponent {
  private route = inject(ActivatedRoute);
  private capabilityService = inject(CapabilityService);
  private galleryService = inject(GalleryService);

  private readonly slug = toSignal(
    this.route.params.pipe(map(params => params['slug']))
  );

  readonly capability = computed(() => {
    return this.capabilityService.getCapabilityBySlug(this.slug());
  });

  readonly projects = computed(() => {
    const currentSlug = this.slug();
    if (!currentSlug) return [];
    return this.galleryService.getGalleryItems()()
      .filter(item => (item.capabilities ?? []).includes(currentSlug))
      // Create new objects for this view that have no grid area styling.
      .map(item => ({ ...item, gridArea: '' }));
  });
}