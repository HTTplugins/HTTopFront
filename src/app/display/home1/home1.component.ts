import { Component } from '@angular/core';
import { HomeSelectorService } from '../homeSelector.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component {


  constructor(private scrollService :HomeSelectorService) {

  }

  scrollToComponent() {
    this.scrollService.toggleButtonClicked();
    this.scrollService.scrollTo('howToStart');
  }

}
