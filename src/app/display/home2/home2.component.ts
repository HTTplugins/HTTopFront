import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeSelectorService } from '../homeSelector.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit  {
  @ViewChild('howToStart', { static: true }) howToStartRef!: ElementRef;
  private scrollToSubscription: Subscription = Subscription.EMPTY;

  constructor(private homeSelectorService: HomeSelectorService) { }
  ngOnInit(): void {
    
    if(this.homeSelectorService.getButoonClicked() == true) {
      setTimeout(() => {
        this.scrollToComponent();
      }, 300);
      this.homeSelectorService.toggleButtonClicked();
    }
    
  }

  



  scrollToComponent() {
    console.log('a');
    if (this.howToStartRef && this.howToStartRef.nativeElement){
      console.log('b');
      this.howToStartRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
