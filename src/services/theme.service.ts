import { Injectable, signal, effect, computed } from '@angular/core';

export interface Theme {
  name: string;
  properties: {
    '--bg-color': string;
    '--text-color': string;
    '--text-color-secondary': string;
    '--text-color-muted': string;
    '--border-color': string;
    '--accent-color': string;
    '--accent-color-hover': string;
    '--special-accent-color': string;
    '--bg-overlay-color': string;
    '--text-overlay-color': string;
    '--scrollbar-track-color': string;
    '--scrollbar-thumb-color': string;
    '--scrollbar-thumb-hover-color': string;
    '--bg-texture-url'?: string;
    '--special-text-glow'?: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private defaultProperties = {
    '--bg-texture-url': 'none',
    '--special-text-glow': 'none',
  };

  private themes: Theme[] = [
    {
      name: 'Concrete',
      properties: { ...this.defaultProperties, '--bg-color': '#d4d4d8', '--text-color': '#18181b', '--text-color-secondary': '#27272a', '--text-color-muted': '#52525b', '--border-color': '#000000', '--accent-color': '#f59e0b', '--accent-color-hover': '#fbbf24', '--special-accent-color': '#ef4444', '--bg-overlay-color': '#000000', '--text-overlay-color': '#e5e5e5', '--scrollbar-track-color': '#d4d4d8', '--scrollbar-thumb-color': '#f59e0b', '--scrollbar-thumb-hover-color': '#fbbf24' }
    },
    {
      name: 'Monolith',
      properties: { ...this.defaultProperties, '--bg-color': '#09090b', '--text-color': '#fafafa', '--text-color-secondary': '#e4e4e7', '--text-color-muted': '#a1a1aa', '--border-color': '#fafafa', '--accent-color': '#fafafa', '--accent-color-hover': '#d4d4d8', '--special-accent-color': '#dc2626', '--bg-overlay-color': '#09090b', '--text-overlay-color': '#fafafa', '--scrollbar-track-color': '#09090b', '--scrollbar-thumb-color': '#fafafa', '--scrollbar-thumb-hover-color': '#d4d4d8' }
    },
    {
      name: 'Hazard Tape',
      properties: { ...this.defaultProperties, '--bg-color': '#000000', '--text-color': '#ffffff', '--text-color-secondary': '#e5e5e5', '--text-color-muted': '#a3a3a3', '--border-color': '#facc15', '--accent-color': '#facc15', '--accent-color-hover': '#fde047', '--special-accent-color': '#ffffff', '--bg-overlay-color': '#000000', '--text-overlay-color': '#facc15', '--scrollbar-track-color': '#000000', '--scrollbar-thumb-color': '#facc15', '--scrollbar-thumb-hover-color': '#fde047' }
    },
    {
      name: 'Redacted',
      properties: { ...this.defaultProperties, '--bg-color': '#171717', '--text-color': '#f5f5f5', '--text-color-secondary': '#e5e5e5', '--text-color-muted': '#a3a3a3', '--border-color': '#ef4444', '--accent-color': '#ef4444', '--accent-color-hover': '#f87171', '--special-accent-color': '#ffffff', '--bg-overlay-color': '#000000', '--text-overlay-color': '#f5f5f5', '--scrollbar-track-color': '#171717', '--scrollbar-thumb-color': '#ef4444', '--scrollbar-thumb-hover-color': '#f87171' }
    },
    {
      name: 'Blueprint',
      properties: { ...this.defaultProperties, '--bg-color': '#1e3a8a', '--text-color': '#ffffff', '--text-color-secondary': '#bfdbfe', '--text-color-muted': '#60a5fa', '--border-color': '#60a5fa', '--accent-color': '#ffffff', '--accent-color-hover': '#bfdbfe', '--special-accent-color': '#facc15', '--bg-overlay-color': '#1e3a8a', '--text-overlay-color': '#ffffff', '--scrollbar-track-color': '#1e3a8a', '--scrollbar-thumb-color': '#60a5fa', '--scrollbar-thumb-hover-color': '#bfdbfe', '--bg-texture-url': `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2360a5fa' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }
    },
    {
      name: 'Terminal Green',
      properties: { ...this.defaultProperties, '--bg-color': '#000000', '--text-color': '#4ade80', '--text-color-secondary': '#86efac', '--text-color-muted': '#15803d', '--border-color': '#4ade80', '--accent-color': '#f5f5f5', '--accent-color-hover': '#a3a3a3', '--special-accent-color': '#4ade80', '--bg-overlay-color': '#000000', '--text-overlay-color': '#4ade80', '--scrollbar-track-color': '#000000', '--scrollbar-thumb-color': '#4ade80', '--scrollbar-thumb-hover-color': '#86efac', '--special-text-glow': '0 0 5px #4ade80, 0 0 10px #4ade80' }
    },
    {
      name: 'Rust Belt',
      properties: { ...this.defaultProperties, '--bg-color': '#4a2c2a', '--text-color': '#fde8e4', '--text-color-secondary': '#f8c2b3', '--text-color-muted': '#b97a6b', '--border-color': '#fde8e4', '--accent-color': '#f56565', '--accent-color-hover': '#fc8181', '--special-accent-color': '#9f7aea', '--bg-overlay-color': '#4a2c2a', '--text-overlay-color': '#fde8e4', '--scrollbar-track-color': '#4a2c2a', '--scrollbar-thumb-color': '#f56565', '--scrollbar-thumb-hover-color': '#fc8181' }
    },
    {
      name: 'Acid Spill',
      properties: { ...this.defaultProperties, '--bg-color': '#000000', '--text-color': '#a3e635', '--text-color-secondary': '#bef264', '--text-color-muted': '#4d7c0f', '--border-color': '#a3e635', '--accent-color': '#d946ef', '--accent-color-hover': '#e879f9', '--special-accent-color': '#ffffff', '--bg-overlay-color': 'rgba(0,0,0,0.9)', '--text-overlay-color': '#a3e635', '--scrollbar-track-color': '#171717', '--scrollbar-thumb-color': '#a3e635', '--scrollbar-thumb-hover-color': '#bef264' }
    },
    {
      name: 'Crimson',
      properties: { ...this.defaultProperties, '--bg-color': '#262626', '--text-color': '#f5f5f5', '--text-color-secondary': '#e5e5e5', '--text-color-muted': '#a3a3a3', '--border-color': '#f5f5f5', '--accent-color': '#dc2626', '--accent-color-hover': '#ef4444', '--special-accent-color': '#facc15', '--bg-overlay-color': '#171717', '--text-overlay-color': '#e5e5e5', '--scrollbar-track-color': '#262626', '--scrollbar-thumb-color': '#dc2626', '--scrollbar-thumb-hover-color': '#ef4444' }
    },
    {
      name: 'Newsprint',
      properties: { ...this.defaultProperties, '--bg-color': '#f5f5f4', '--text-color': '#18181b', '--text-color-secondary': '#3f3f46', '--text-color-muted': '#71717a', '--border-color': '#18181b', '--accent-color': '#2563eb', '--accent-color-hover': '#3b82f6', '--special-accent-color': '#dc2626', '--bg-overlay-color': '#f5f5f4', '--text-overlay-color': '#18181b', '--scrollbar-track-color': '#f5f5f4', '--scrollbar-thumb-color': '#2563eb', '--scrollbar-thumb-hover-color': '#3b82f6', '--bg-texture-url': `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW19fX3CwsLR0dHW1tbV1dXJycnGxsapqampqqnc3Nzg4ODPz8/Q0NDh4eHR0dGenp7T09Pb29vW1tbPz8/S0tLHx8e/v7/v7+/f39/V1dXg4OAZK06UAAAAFElEQVR42mP8/MgEwQKMNABokNFoAwA+uAW6SgT4xQAAAABJRU5ErkJggg==")` }
    },
    {
      name: 'Arctic',
      properties: { ...this.defaultProperties, '--bg-color': '#f8fafc', '--text-color': '#475569', '--text-color-secondary': '#64748b', '--text-color-muted': '#94a3b8', '--border-color': '#475569', '--accent-color': '#0ea5e9', '--accent-color-hover': '#38bdf8', '--special-accent-color': '#f43f5e', '--bg-overlay-color': '#f8fafc', '--text-overlay-color': '#475569', '--scrollbar-track-color': '#f8fafc', '--scrollbar-thumb-color': '#0ea5e9', '--scrollbar-thumb-hover-color': '#38bdf8' }
    },
    {
      name: 'Infrared',
      properties: { ...this.defaultProperties, '--bg-color': '#0c0a09', '--text-color': '#fef2f2', '--text-color-secondary': '#fecaca', '--text-color-muted': '#b91c1c', '--border-color': '#f97316', '--accent-color': '#8b5cf6', '--accent-color-hover': '#a78bfa', '--special-accent-color': '#f97316', '--bg-overlay-color': '#0c0a09', '--text-overlay-color': '#fef2f2', '--scrollbar-track-color': '#0c0a09', '--scrollbar-thumb-color': '#8b5cf6', '--scrollbar-thumb-hover-color': '#a78bfa' }
    },
    {
      name: 'Washed Out',
      properties: { ...this.defaultProperties, '--bg-color': '#d1d5db', '--text-color': '#374151', '--text-color-secondary': '#4b5563', '--text-color-muted': '#6b7280', '--border-color': '#374151', '--accent-color': '#16a34a', '--accent-color-hover': '#22c55e', '--special-accent-color': '#991b1b', '--bg-overlay-color': '#d1d5db', '--text-overlay-color': '#374151', '--scrollbar-track-color': '#d1d5db', '--scrollbar-thumb-color': '#16a34a', '--scrollbar-thumb-hover-color': '#22c55e' }
    },
    {
      name: 'Glitch',
      properties: { ...this.defaultProperties, '--bg-color': '#000000', '--text-color': '#ffffff', '--text-color-secondary': '#e5e5e5', '--text-color-muted': '#a3a3a3', '--border-color': '#00ffff', '--accent-color': '#ff00ff', '--accent-color-hover': '#f973ff', '--special-accent-color': '#00ffff', '--bg-overlay-color': '#000000', '--text-overlay-color': '#ffffff', '--scrollbar-track-color': '#000000', '--scrollbar-thumb-color': '#ff00ff', '--scrollbar-thumb-hover-color': '#f973ff', '--special-text-glow': '-1px -1px 0px #00ffff, 1px 1px 0px #ff00ff' }
    },
    {
      name: 'Caution',
      properties: { ...this.defaultProperties, '--bg-color': '#ffffff', '--text-color': '#000000', '--text-color-secondary': '#262626', '--text-color-muted': '#525252', '--border-color': '#000000', '--accent-color': '#f97316', '--accent-color-hover': '#fb923c', '--special-accent-color': '#2563eb', '--bg-overlay-color': '#ffffff', '--text-overlay-color': '#000000', '--scrollbar-track-color': '#ffffff', '--scrollbar-thumb-color': '#f97316', '--scrollbar-thumb-hover-color': '#fb923c' }
    },
    {
      name: 'Militarized',
      properties: { ...this.defaultProperties, '--bg-color': '#44403c', '--text-color': '#f5f5f4', '--text-color-secondary': '#e7e5e4', '--text-color-muted': '#a8a29e', '--border-color': '#f5f5f4', '--accent-color': '#ca8a04', '--accent-color-hover': '#eab308', '--special-accent-color': '#dc2626', '--bg-overlay-color': '#44403c', '--text-overlay-color': '#f5f5f4', '--scrollbar-track-color': '#44403c', '--scrollbar-thumb-color': '#ca8a04', '--scrollbar-thumb-hover-color': '#eab308' }
    },
    {
      name: 'Subterranean',
      properties: { ...this.defaultProperties, '--bg-color': '#083344', '--text-color': '#ecfeff', '--text-color-secondary': '#cfeff2', '--text-color-muted': '#22d3ee', '--border-color': '#22d3ee', '--accent-color': '#a3e635', '--accent-color-hover': '#bef264', '--special-accent-color': '#ecfeff', '--bg-overlay-color': '#083344', '--text-overlay-color': '#ecfeff', '--scrollbar-track-color': '#083344', '--scrollbar-thumb-color': '#22d3ee', '--scrollbar-thumb-hover-color': '#67e8f9' }
    },
    {
      name: 'Corroded',
      properties: { ...this.defaultProperties, '--bg-color': '#292524', '--text-color': '#d6d3d1', '--text-color-secondary': '#a8a29e', '--text-color-muted': '#78716c', '--border-color': '#d6d3d1', '--accent-color': '#059669', '--accent-color-hover': '#10b981', '--special-accent-color': '#f59e0b', '--bg-overlay-color': '#292524', '--text-overlay-color': '#d6d3d1', '--scrollbar-track-color': '#292524', '--scrollbar-thumb-color': '#059669', '--scrollbar-thumb-hover-color': '#10b981' }
    },
    {
      name: 'High-Vis',
      properties: { ...this.defaultProperties, '--bg-color': '#1c1917', '--text-color': '#fafaf9', '--text-color-secondary': '#e7e5e4', '--text-color-muted': '#a8a29e', '--border-color': '#ff4500', '--accent-color': '#ff4500', '--accent-color-hover': '#ff6a34', '--special-accent-color': '#ffffff', '--bg-overlay-color': '#1c1917', '--text-overlay-color': '#fafaf9', '--scrollbar-track-color': '#1c1917', '--scrollbar-thumb-color': '#ff4500', '--scrollbar-thumb-hover-color': '#ff6a34' }
    },
    {
      name: '3D Particle Mesh',
      properties: { ...this.defaultProperties, '--bg-color': '#000000', '--text-color': '#ffffff', '--text-color-secondary': '#d4d4d4', '--text-color-muted': '#a3a3a3', '--border-color': '#ffffff', '--accent-color': '#0ea5e9', '--accent-color-hover': '#38bdf8', '--special-accent-color': '#f87171', '--bg-overlay-color': '#171717', '--text-overlay-color': '#e5e5e5', '--scrollbar-track-color': '#171717', '--scrollbar-thumb-color': '#0ea5e9', '--scrollbar-thumb-hover-color': '#38bdf8' }
    }
  ];

  private currentThemeIndex = signal(0);
  public currentTheme = computed(() => this.themes[this.currentThemeIndex()]);
  public isThreeJsTheme = computed(() => this.currentTheme().name === '3D Particle Mesh');

  constructor() {
    effect(() => {
      const theme = this.currentTheme();
      this.applyTheme(theme);
    });
    this.applyTheme(this.currentTheme());
  }

  private applyTheme(theme: Theme): void {
    const root = document.documentElement;
    // Reset properties to default before applying new ones to avoid stale values
    Object.entries(this.defaultProperties).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    Object.entries(theme.properties).forEach(([key, value]) => {
      root.style.setProperty(key, value as string);
    });
    
    const h1 = root.querySelector('.font-graffiti');
    if (h1 instanceof HTMLElement) {
       h1.style.textShadow = theme.properties['--special-text-glow'] ?? 'none';
    }
  }

  setNextTheme(): void {
    this.currentThemeIndex.update(index => (index + 1) % this.themes.length);
  }
}
