import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [NgOptimizedImage],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  protected readonly menuOpen = signal(false);

  protected readonly navigationLinks = [
    { label: 'Inicio', icon: 'bi-house', href: '#inicio' },
    { label: 'Sobre mí', icon: 'bi-person', href: '#sobre-mi' },
    { label: 'Portafolio', icon: 'bi-images', href: '#portafolio' },
    { label: 'Contacto', icon: 'bi-envelope', href: '#contacto' },
  ];

  protected readonly socialLinks = [
    {
      label: 'GitHub',
      icon: 'bi-github',
      href: 'https://github.com/JosJoel',
    },
    {
      label: 'Instagram',
      icon: 'bi-instagram',
      href: 'https://www.instagram.com/Joshjhoel/',
    },
  ];

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }
}
