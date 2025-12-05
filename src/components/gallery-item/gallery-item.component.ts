import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItem } from '../../services/gallery.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-gallery-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.grid-area]': 'item().gridArea',
    'class': 'flex flex-col gap-2 group cursor-pointer transition-all duration-300 ease-in-out hover:!z-10 hover:scale-[1.03] overflow-visible',
  },
})
export class GalleryItemComponent {
  item = input.required<GalleryItem>();
  private audioService = inject(AudioService);

  private readonly hoverSoundSrc = 'data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBIAAAABAAEARKwAABCxAgAEABAAZGF0YQAYAAAAAP8/AD8A/wA/AD8A/wA/AD8A/wA/AD8A/wA=';

  playHoverSound(): void {
    this.audioService.play(this.hoverSoundSrc);
  }
}
