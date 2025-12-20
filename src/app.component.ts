import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';
import { ThreejsBackgroundComponent } from './components/threejs-background/threejs-background.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ThreejsBackgroundComponent],
})
export class AppComponent {
  currentYear = new Date().getFullYear();
  isMobileMenuOpen = signal(false);
  themeService = inject(ThemeService);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(value => !value);
  }

  cycleTheme(): void {
    this.themeService.setNextTheme();
  }
}