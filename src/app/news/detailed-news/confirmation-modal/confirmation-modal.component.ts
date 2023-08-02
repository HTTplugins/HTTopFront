import { Component, OnInit } from '@angular/core';
import { ModalControlService } from 'src/app/modal-control.service';
import { newsObtainerService } from '../../newsObtainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent{

  idPost :number;

  constructor(private modal :ModalControlService, private newsObtainer :newsObtainerService, private router: Router){}


  onSubmit(){}

  deletePost(){
  
    this.newsObtainer.deletePost();
    this.modal.confirmationCloseModal();
    this.newsObtainer.clear_news_list();
    this.router.navigate(['/news']);
  }
  
  confirmationCloseModal(){
    
    this.modal.confirmationCloseModal();
  }
  getConfirmationModalOpen(){
    return this.modal.confirmationIsOpen();
  }

}
