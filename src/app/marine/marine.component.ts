import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marine',
  templateUrl: './marine.component.html',
  styleUrls: ['./marine.component.css']
})
export class MarineComponent implements OnInit {

  ngOnInit() {
    // Agrega la clase fade-in a los elementos que deseas animar después de que la vista se haya inicializado
    const elementsToAnimate = document.querySelectorAll('.fade-in');
    elementsToAnimate.forEach(element => {
      element.classList.add('fade-in');
    });
  }
}
