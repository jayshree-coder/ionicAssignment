import { Component,OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  swiperModules = [IonicSlides];
  content_loaded: boolean = false;
  slideOptions = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 'auto', // Display as many slides as possible without scrolling
    spaceBetween: 10, // Adjust as needed
  };

  slideItems = [
    {
      imageUrl: 'assets/img/Center.svg',
      title: 'Learn about Bond points',
    },
    {
      imageUrl: 'assets/img/rabbit 1.svg',
      title: 'Learn about Bond pointss',
    },
    {
      imageUrl: 'assets/img/Center.svg',
      title: 'Learn about Bond points',
    },
  ];


  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.content_loaded = true;
    },2000);
  }


}
