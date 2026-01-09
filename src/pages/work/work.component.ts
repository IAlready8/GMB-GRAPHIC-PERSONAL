import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItemComponent } from '../../components/gallery-item/gallery-item.component';
import { GalleryService } from '../../services/gallery.service';

@Component({
  standalone: true,
  imports: [CommonModule, GalleryItemComponent],
  templateUrl: './work.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  private galleryService = inject(GalleryService);
  items = this.galleryService.getGalleryItems();
}