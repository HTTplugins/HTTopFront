import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marine',
  templateUrl: './marine.component.html',
  styleUrls: ['./marine.component.css']
})
export class MarineComponent implements OnInit {

  ngOnInit() {

    const elementsToAnimate = document.querySelectorAll('.fade-in');
    elementsToAnimate.forEach(element => {
      element.classList.add('fade-in');
    });
  }
}
