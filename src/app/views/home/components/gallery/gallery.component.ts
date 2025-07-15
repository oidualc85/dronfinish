import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule  } from 'ngx-slick-carousel';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, SlickCarouselModule],
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

  sliderConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    prevArrow: '.gallery-prev-arrow',
    nextArrow: '.gallery-next-arrow',
  };

}
