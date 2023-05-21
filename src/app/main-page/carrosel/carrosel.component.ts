import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.scss']
})
export class CarroselComponent implements OnInit {
  images: { url: string }[] = [
    { url: '../../../assets/imagens/Escritório Mestre da Forja 2.jpg' },
    { url: '../../../assets/imagens/Escritório Mestre da Forja 2.jpg' },
    { url: '../../../assets/imagens/Escritório Mestre da Forja 2.jpg' }
  ];
  currentIndex: number = 0;

  ngOnInit() {
    this.showSlide(this.currentIndex);
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.showSlide(this.currentIndex);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.showSlide(this.currentIndex);
  }

  showSlide(index: number) {
    const slideElements = document.querySelectorAll('.carousel-inner > div');
    slideElements.forEach((element, i) => {
      element.classList.toggle('active', i === index);
    });
  }
}
