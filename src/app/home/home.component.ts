import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    {img: "assets/images/slide5.jpg"},
    {img: "assets/images/logo.png"}
  ];

  slideConfig = {
    "slidesToShow": 2,
    "slidesToScroll": 2,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "pauseOnHover": true,
    "infinite": true,
    "responsive": [
      {
        "breackpoint": 992,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 2,
          "slidesToScroll": 2,
        }
      },
      {
        "breackpoint": 768,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 2,
          "slidesToScroll": 2
        }
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }



}
