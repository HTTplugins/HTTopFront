import { Component } from '@angular/core';
import { ModalControlService } from 'src/app/modal-control.service';
import { newsObtainerService } from '../newsObtainer.service';
import { news } from '../news.model';


@Component({
  selector: 'app-new-post-modal',
  templateUrl: './new-post-modal.component.html',
  styleUrls: ['./new-post-modal.component.css']
})
export class NewPostModalComponent {
  title :string = '';
  description :string = '';
  content :string = '';
  Errors: string[] = [];

  editorConfig = {
    editable: true,
    spellcheck: true,
    height: '200px', // Altura del editor
    minHeight: '100px',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultFontName: 'Arial',
    defaultFontSize: '3',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    uploadUrl: 'http://localhost:3000/upload', // URL para subir imágenes (si se necesita)
    sanitize: true,
    toolbarPosition: undefined, // Cambiar el valor a 'undefined'
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']]
  };
  constructor(private modalControl: ModalControlService, private newsobtaiter :newsObtainerService){}

  getNewPostModal(){
    return this.modalControl.newPostIsOpen();
  }
  
  
  newPostCloseModal(){
    this.modalControl.newPostCloseModal();
  }

  onSubmit(){
    this.Errors = [];
    if (this.title.length < 5) {
      this.Errors.push('Title must be at least 5 characters long');
    } else if (this.title.length > 40){
      this.Errors.push('Title must be at most 40 characters long');
    }
    



    if (this.description.length < 10) {
      this.Errors.push('Description must be at least 10 characters long');
    }
    else if (this.description.length > 150){
      this.Errors.push('Description must be at most 150 characters long');
    }

    if (this.content.length < 10) {
      this.Errors.push('Content must be at least 10 characters long');
    }

    if (this.Errors.length === 0) {
      this.newPostCloseModal();
      var newNews: news = {
        id: 0, 
        title: this.title,
        descrip: this.description,
        content: this.content,
        pdate: ''
      };
       
      this.newsobtaiter.addPost(newNews);
      this.modalControl.newPostCloseModal();
      window.location.reload();
      
    }
    
  }

  

}
