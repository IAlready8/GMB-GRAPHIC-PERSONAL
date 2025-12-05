import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private isUnlocked = signal(false);
  private audioPlayer: HTMLAudioElement;

  constructor() {
    this.audioPlayer = new Audio();
  }

  /**
   * Unlocks the audio context for the application. This method should be called
   * by the first user interaction (e.g., a click) to comply with browser
   * autoplay policies.
   */
  unlock(): void {
    if (this.isUnlocked()) {
      return;
    }
    this.isUnlocked.set(true);
    // A common technique to prime the audio system in some browsers.
    this.audioPlayer.play().catch(() => {});
    this.audioPlayer.pause();
  }

  /**
   * Plays an audio file from the given source. Will not play if the audio context
   * has not been unlocked by a user interaction first.
   * @param src The source URL or Base64 data URI of the audio to play.
   */
  play(src: string): void {
    if (!this.isUnlocked()) {
      // Silently ignore play requests until the user has interacted with the page.
      return;
    }
    this.audioPlayer.src = src;
    this.audioPlayer.currentTime = 0;
    this.audioPlayer.play().catch(e => console.error('Audio playback failed:', e));
  }
}
