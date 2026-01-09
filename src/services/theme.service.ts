import { Injectable, signal, effect, computed } from '@angular/core';

export interface Theme {
  name: string;
  properties: {
    '--bg-color': string;
    '--bg-image'?: string;
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
    '--backdrop-styles'?: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private defaultProperties = {
    '--bg-image': 'none',
    '--bg-texture-url': 'none',
    '--special-text-glow': 'none',
    '--backdrop-styles': '',
  };

  private themes: Theme[] = [
    {
      name: 'Ultra Violet',
      properties: { ...this.defaultProperties, '--bg-color': '#2e1065', '--text-color': '#e9d5ff', '--text-color-secondary': '#d8b4fe', '--text-color-muted': '#6b21a8', '--border-color': '#a855f7', '--accent-color': '#f472b6', '--accent-color-hover': '#fbcfe8', '--special-accent-color': '#ffffff', '--bg-overlay-color': '#2e1065', '--text-overlay-color': '#e9d5ff', '--scrollbar-track-color': '#2e1065', '--scrollbar-thumb-color': '#a855f7', '--scrollbar-thumb-hover-color': '#c084fc' }
    },
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
    },
    // --- VIBRANT SOLID THEMES ---
    {
      name: 'Neon Dusk',
      properties: { ...this.defaultProperties, '--bg-color': '#0f172a', '--text-color': '#f472b6', '--text-color-secondary': '#e879f9', '--text-color-muted': '#818cf8', '--border-color': '#c084fc', '--accent-color': '#22d3ee', '--accent-color-hover': '#67e8f9', '--special-accent-color': '#facc15', '--bg-overlay-color': '#0f172a', '--text-overlay-color': '#f472b6', '--scrollbar-track-color': '#0f172a', '--scrollbar-thumb-color': '#c084fc', '--scrollbar-thumb-hover-color': '#d8b4fe' }
    },
    {
      name: 'Acid Rain',
      properties: { ...this.defaultProperties, '--bg-color': '#020617', '--text-color': '#bef264', '--text-color-secondary': '#86efac', '--text-color-muted': '#3f6212', '--border-color': '#3f6212', '--accent-color': '#22c55e', '--accent-color-hover': '#4ade80', '--special-accent-color': '#faff00', '--bg-overlay-color': '#020617', '--text-overlay-color': '#bef264', '--scrollbar-track-color': '#020617', '--scrollbar-thumb-color': '#bef264', '--scrollbar-thumb-hover-color': '#d9f99d' }
    },
    {
      name: 'Solar Flare',
      properties: { ...this.defaultProperties, '--bg-color': '#450a0a', '--text-color': '#fca5a5', '--text-color-secondary': '#fdba74', '--text-color-muted': '#b91c1c', '--border-color': '#f87171', '--accent-color': '#fcd34d', '--accent-color-hover': '#fbbf24', '--special-accent-color': '#ffffff', '--bg-overlay-color': '#450a0a', '--text-overlay-color': '#fca5a5', '--scrollbar-track-color': '#450a0a', '--scrollbar-thumb-color': '#f87171', '--scrollbar-thumb-hover-color': '#fca5a5' }
    },
    {
      name: 'Deep Dive',
      properties: { ...this.defaultProperties, '--bg-color': '#082f49', '--text-color': '#7dd3fc', '--text-color-secondary': '#bae6fd', '--text-color-muted': '#0c4a6e', '--border-color': '#0369a1', '--accent-color': '#38bdf8', '--accent-color-hover': '#7dd3fc', '--special-accent-color': '#f0f9ff', '--bg-overlay-color': '#082f49', '--text-overlay-color': '#7dd3fc', '--scrollbar-track-color': '#082f49', '--scrollbar-thumb-color': '#0369a1', '--scrollbar-thumb-hover-color': '#0ea5e9' }
    },
    // --- BRUTALIST THEMES ---
    {
      name: 'Cardboard',
      properties: { ...this.defaultProperties, '--bg-color': '#a1815b', '--text-color': '#2d241b', '--text-color-secondary': '#4a3b2a', '--text-color-muted': '#5c4d3c', '--border-color': '#2d241b', '--accent-color': '#000000', '--accent-color-hover': '#1a1a1a', '--special-accent-color': '#e5e5e5', '--bg-overlay-color': '#a1815b', '--text-overlay-color': '#2d241b', '--scrollbar-track-color': '#a1815b', '--scrollbar-thumb-color': '#2d241b', '--scrollbar-thumb-hover-color': '#4a3b2a', '--bg-texture-url': `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")` }
    },
    {
      name: 'Asphalt',
      properties: { ...this.defaultProperties, '--bg-color': '#262626', '--text-color': '#d4d4d4', '--text-color-secondary': '#a3a3a3', '--text-color-muted': '#525252', '--border-color': '#525252', '--accent-color': '#facc15', '--accent-color-hover': '#fde047', '--special-accent-color': '#ffffff', '--bg-overlay-color': '#262626', '--text-overlay-color': '#d4d4d4', '--scrollbar-track-color': '#262626', '--scrollbar-thumb-color': '#525252', '--scrollbar-thumb-hover-color': '#737373', '--bg-texture-url': `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")` }
    },
    {
      name: 'Sterile',
      properties: { ...this.defaultProperties, '--bg-color': '#ffffff', '--text-color': '#0f172a', '--text-color-secondary': '#334155', '--text-color-muted': '#94a3b8', '--border-color': '#e2e8f0', '--accent-color': '#3b82f6', '--accent-color-hover': '#60a5fa', '--special-accent-color': '#ef4444', '--bg-overlay-color': '#ffffff', '--text-overlay-color': '#0f172a', '--scrollbar-track-color': '#f1f5f9', '--scrollbar-thumb-color': '#cbd5e1', '--scrollbar-thumb-hover-color': '#94a3b8' }
    },
    {
      name: 'Bunker',
      properties: { ...this.defaultProperties, '--bg-color': '#3f3f46', '--text-color': '#d4d4d8', '--text-color-secondary': '#a1a1aa', '--text-color-muted': '#52525b', '--border-color': '#18181b', '--accent-color': '#84cc16', '--accent-color-hover': '#a3e635', '--special-accent-color': '#ffffff', '--bg-overlay-color': '#3f3f46', '--text-overlay-color': '#d4d4d8', '--scrollbar-track-color': '#3f3f46', '--scrollbar-thumb-color': '#18181b', '--scrollbar-thumb-hover-color': '#27272a' }
    },
    {
      name: 'Payload',
      properties: { ...this.defaultProperties, '--bg-color': '#18181b', '--text-color': '#fbbf24', '--text-color-secondary': '#fcd34d', '--text-color-muted': '#b45309', '--border-color': '#f59e0b', '--accent-color': '#ef4444', '--accent-color-hover': '#f87171', '--special-accent-color': '#ffffff', '--bg-overlay-color': '#18181b', '--text-overlay-color': '#fbbf24', '--scrollbar-track-color': '#18181b', '--scrollbar-thumb-color': '#f59e0b', '--scrollbar-thumb-hover-color': '#fbbf24', '--special-text-glow': '0 0 2px #f59e0b' }
    },
    // --- GRADIENT THEMES ---
    {
      name: 'Fade to Black',
      properties: { ...this.defaultProperties, '--bg-color': '#000000', '--bg-image': 'linear-gradient(to bottom, #3f3f46, #000000)', '--text-color': '#f4f4f5', '--text-color-secondary': '#d4d4d8', '--text-color-muted': '#71717a', '--border-color': '#71717a', '--accent-color': '#ffffff', '--accent-color-hover': '#e4e4e7', '--special-accent-color': '#000000', '--bg-overlay-color': 'rgba(0,0,0,0.8)', '--text-overlay-color': '#ffffff', '--scrollbar-track-color': '#18181b', '--scrollbar-thumb-color': '#52525b', '--scrollbar-thumb-hover-color': '#71717a', '--backdrop-styles': 'true' }
    },
    {
      name: 'Sunset Strip',
      properties: { ...this.defaultProperties, '--bg-color': '#8b5cf6', '--bg-image': 'linear-gradient(to right, #f43f5e, #8b5cf6)', '--text-color': '#ffffff', '--text-color-secondary': '#ffe4e6', '--text-color-muted': '#fda4af', '--border-color': '#ffffff', '--accent-color': '#fcd34d', '--accent-color-hover': '#fbbf24', '--special-accent-color': '#ffffff', '--bg-overlay-color': 'rgba(139, 92, 246, 0.9)', '--text-overlay-color': '#ffffff', '--scrollbar-track-color': '#8b5cf6', '--scrollbar-thumb-color': '#fcd34d', '--scrollbar-thumb-hover-color': '#fbbf24', '--backdrop-styles': 'true' }
    },
    {
      name: 'Toxic Haze',
      properties: { ...this.defaultProperties, '--bg-color': '#1a2e05', '--bg-image': 'radial-gradient(circle at 50% 50%, #365314 0%, #020617 100%)', '--text-color': '#bef264', '--text-color-secondary': '#86efac', '--text-color-muted': '#4d7c0f', '--border-color': '#86efac', '--accent-color': '#f9a8d4', '--accent-color-hover': '#f472b6', '--special-accent-color': '#ffffff', '--bg-overlay-color': 'rgba(26, 46, 5, 0.9)', '--text-overlay-color': '#bef264', '--scrollbar-track-color': '#1a2e05', '--scrollbar-thumb-color': '#86efac', '--scrollbar-thumb-hover-color': '#bef264', '--backdrop-styles': 'true' }
    },
    {
      name: 'Northern Lights',
      properties: { ...this.defaultProperties, '--bg-color': '#1e1b4b', '--bg-image': 'conic-gradient(from 180deg at 50% 50%, #1e1b4b, #312e81, #4c1d95, #1e1b4b)', '--text-color': '#67e8f9', '--text-color-secondary': '#a5f3fc', '--text-color-muted': '#0891b2', '--border-color': '#22d3ee', '--accent-color': '#e879f9', '--accent-color-hover': '#f0abfc', '--special-accent-color': '#ffffff', '--bg-overlay-color': 'rgba(30, 27, 75, 0.9)', '--text-overlay-color': '#67e8f9', '--scrollbar-track-color': '#1e1b4b', '--scrollbar-thumb-color': '#22d3ee', '--scrollbar-thumb-hover-color': '#67e8f9', '--backdrop-styles': 'true' }
    },
    {
      name: 'Steel Breeze',
      properties: { ...this.defaultProperties, '--bg-color': '#e5e7eb', '--bg-image': 'linear-gradient(120deg, #e5e7eb, #9ca3af)', '--text-color': '#111827', '--text-color-secondary': '#374151', '--text-color-muted': '#6b7280', '--border-color': '#374151', '--accent-color': '#ef4444', '--accent-color-hover': '#f87171', '--special-accent-color': '#111827', '--bg-overlay-color': 'rgba(229, 231, 235, 0.9)', '--text-overlay-color': '#111827', '--scrollbar-track-color': '#e5e7eb', '--scrollbar-thumb-color': '#ef4444', '--scrollbar-thumb-hover-color': '#f87171', '--backdrop-styles': 'true' }
    },
    // --- NEW MIXED THEMES ---
    {
      name: 'Synthwave',
      properties: { ...this.defaultProperties, '--bg-color': '#2b213a', '--bg-image': 'linear-gradient(to bottom, #2b213a, #1a1a2e)', '--text-color': '#ff71ce', '--text-color-secondary': '#b967ff', '--text-color-muted': '#01cdfe', '--border-color': '#01cdfe', '--accent-color': '#fffb96', '--accent-color-hover': '#ff71ce', '--special-accent-color': '#05ffa1', '--bg-overlay-color': 'rgba(43, 33, 58, 0.9)', '--text-overlay-color': '#ff71ce', '--scrollbar-track-color': '#2b213a', '--scrollbar-thumb-color': '#01cdfe', '--scrollbar-thumb-hover-color': '#fffb96', '--backdrop-styles': 'true', '--special-text-glow': '0 0 5px #ff71ce, 0 0 10px #01cdfe' }
    },
    {
      name: 'Matrix',
      properties: { ...this.defaultProperties, '--bg-color': '#000000', '--text-color': '#00ff41', '--text-color-secondary': '#008f11', '--text-color-muted': '#003b00', '--border-color': '#003b00', '--accent-color': '#ffffff', '--accent-color-hover': '#00ff41', '--special-accent-color': '#00ff41', '--bg-overlay-color': 'rgba(0,0,0,0.95)', '--text-overlay-color': '#00ff41', '--scrollbar-track-color': '#000000', '--scrollbar-thumb-color': '#008f11', '--scrollbar-thumb-hover-color': '#00ff41', '--special-text-glow': '0 0 4px #00ff41' }
    },
    {
      name: 'Parchment',
      properties: { ...this.defaultProperties, '--bg-color': '#fdfbf7', '--text-color': '#2c2c2c', '--text-color-secondary': '#4a4a4a', '--text-color-muted': '#8b8b8b', '--border-color': '#d1cdc0', '--accent-color': '#8b4513', '--accent-color-hover': '#a0522d', '--special-accent-color': '#cd853f', '--bg-overlay-color': '#fdfbf7', '--text-overlay-color': '#2c2c2c', '--scrollbar-track-color': '#fdfbf7', '--scrollbar-thumb-color': '#d1cdc0', '--scrollbar-thumb-hover-color': '#8b4513', '--bg-texture-url': `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")` }
    },
    {
      name: 'Dracula',
      properties: { ...this.defaultProperties, '--bg-color': '#282a36', '--text-color': '#f8f8f2', '--text-color-secondary': '#bd93f9', '--text-color-muted': '#6272a4', '--border-color': '#44475a', '--accent-color': '#ff79c6', '--accent-color-hover': '#ffb86c', '--special-accent-color': '#50fa7b', '--bg-overlay-color': '#282a36', '--text-overlay-color': '#f8f8f2', '--scrollbar-track-color': '#282a36', '--scrollbar-thumb-color': '#bd93f9', '--scrollbar-thumb-hover-color': '#ff79c6' }
    },
    {
      name: 'Nordic',
      properties: { ...this.defaultProperties, '--bg-color': '#2e3440', '--text-color': '#d8dee9', '--text-color-secondary': '#81a1c1', '--text-color-muted': '#4c566a', '--border-color': '#4c566a', '--accent-color': '#88c0d0', '--accent-color-hover': '#8fbcbb', '--special-accent-color': '#ebcb8b', '--bg-overlay-color': '#2e3440', '--text-overlay-color': '#d8dee9', '--scrollbar-track-color': '#2e3440', '--scrollbar-thumb-color': '#81a1c1', '--scrollbar-thumb-hover-color': '#88c0d0' }
    },
    {
      name: 'Cotton Candy',
      properties: { ...this.defaultProperties, '--bg-color': '#fff0f5', '--bg-image': 'linear-gradient(to right, #e0c3fc, #8ec5fc)', '--text-color': '#5e5e5e', '--text-color-secondary': '#7a7a7a', '--text-color-muted': '#a0a0a0', '--border-color': '#ffffff', '--accent-color': '#ff69b4', '--accent-color-hover': '#ff1493', '--special-accent-color': '#ffffff', '--bg-overlay-color': 'rgba(255, 240, 245, 0.8)', '--text-overlay-color': '#5e5e5e', '--scrollbar-track-color': '#e0c3fc', '--scrollbar-thumb-color': '#ffffff', '--scrollbar-thumb-hover-color': '#ff69b4', '--backdrop-styles': 'true' }
    },
    {
      name: 'Abyss',
      properties: { ...this.defaultProperties, '--bg-color': '#000000', '--bg-image': 'radial-gradient(circle at 50% 100%, #1f1f1f, #000000)', '--text-color': '#9ca3af', '--text-color-secondary': '#6b7280', '--text-color-muted': '#374151', '--border-color': '#374151', '--accent-color': '#ffffff', '--accent-color-hover': '#d1d5db', '--special-accent-color': '#ffffff', '--bg-overlay-color': '#000000', '--text-overlay-color': '#9ca3af', '--scrollbar-track-color': '#000000', '--scrollbar-thumb-color': '#374151', '--scrollbar-thumb-hover-color': '#6b7280' }
    },
    {
      name: 'Gameboy',
      properties: { ...this.defaultProperties, '--bg-color': '#8bac0f', '--text-color': '#0f380f', '--text-color-secondary': '#306230', '--text-color-muted': '#306230', '--border-color': '#0f380f', '--accent-color': '#0f380f', '--accent-color-hover': '#306230', '--special-accent-color': '#0f380f', '--bg-overlay-color': '#8bac0f', '--text-overlay-color': '#0f380f', '--scrollbar-track-color': '#8bac0f', '--scrollbar-thumb-color': '#306230', '--scrollbar-thumb-hover-color': '#0f380f', '--bg-texture-url': `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0zm2 2h1v1H2z' fill='%230f380f' fill-opacity='0.1'/%3E%3C/svg%3E")` }
    },
    {
      name: 'Corporate',
      properties: { ...this.defaultProperties, '--bg-color': '#f3f4f6', '--text-color': '#111827', '--text-color-secondary': '#374151', '--text-color-muted': '#6b7280', '--border-color': '#d1d5db', '--accent-color': '#2563eb', '--accent-color-hover': '#1d4ed8', '--special-accent-color': '#dc2626', '--bg-overlay-color': '#f3f4f6', '--text-overlay-color': '#111827', '--scrollbar-track-color': '#f3f4f6', '--scrollbar-thumb-color': '#d1d5db', '--scrollbar-thumb-hover-color': '#9ca3af' }
    },
    {
      name: 'Heatmap',
      properties: { ...this.defaultProperties, '--bg-color': '#1a0000', '--bg-image': 'linear-gradient(45deg, #1a0000, #4a0000, #ff0000, #ffff00)', '--text-color': '#ffffff', '--text-color-secondary': '#ffcccc', '--text-color-muted': '#800000', '--border-color': '#ff0000', '--accent-color': '#ffff00', '--accent-color-hover': '#ffcc00', '--special-accent-color': '#ffffff', '--bg-overlay-color': 'rgba(26, 0, 0, 0.8)', '--text-overlay-color': '#ffffff', '--scrollbar-track-color': '#1a0000', '--scrollbar-thumb-color': '#ff0000', '--scrollbar-thumb-hover-color': '#ffff00', '--backdrop-styles': 'true' }
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