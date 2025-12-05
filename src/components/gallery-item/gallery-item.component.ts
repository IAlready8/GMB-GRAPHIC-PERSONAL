import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItem } from '../../services/gallery.service';

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
}