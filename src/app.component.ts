import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';
import { GalleryService } from './services/gallery.service';
import { AudioService } from './services/audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, GalleryItemComponent],
  host: {
    '(click)': 'unlockAudio()',
  },
})
export class AppComponent {
  private galleryService = inject(GalleryService);
  private audioService = inject(AudioService);
  galleryItems = this.galleryService.getGalleryItems();

  currentYear = new Date().getFullYear();

  unlockAudio(): void {
    this.audioService.unlock();
  }
}
