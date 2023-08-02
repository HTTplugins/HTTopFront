import { Component } from '@angular/core';
import { ModalControlService } from 'src/app/modal-control.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {

  constructor(private modal :ModalControlService){}

  onSubmit(){}
  confirmationCloseModal(){}
  getConfirmationModalOpen(){
    return this.modal.confirmationIsOpen();
  }

}
