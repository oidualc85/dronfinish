import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMasonryModule, NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-gallery',

  imports: [CommonModule, NgxMasonryModule], 
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  images: string[] = [
    'assets/img/all-images/g1.jpg',
    'assets/img/all-images/g2.avif',
    'assets/img/all-images/g3.avif',
    'assets/img/all-images/g4.png',
    'assets/img/all-images/g5.webp',
    'assets/img/all-images/g6.png'
  ];


  public masonryOptions: NgxMasonryOptions = {
    gutter: 20, // Espacio entre ítems en píxeles
    itemSelector: '.masonry-item',
    percentPosition: true,
  };
}