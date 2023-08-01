import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class HomeSelectorService {

  homeNum :number = 1;
  buttonClicked :boolean = false;

  setHomeNum(num: number) {
    this.homeNum = num;
  }

  scrollTo(site: string) {
    this.setHomeNum(2);
  }

  toggleButtonClicked() {
    this.buttonClicked = !this.buttonClicked;
  }

  getButoonClicked() {
    return this.buttonClicked;
  }


 
}
