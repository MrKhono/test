import { Component, ElementRef, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { DidacticielService } from 'src/app/services/didacticiel.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';


@Component({
  selector: 'app-first-modal',
  templateUrl: './first-modal.component.html',
  styleUrls: ['./first-modal.component.scss'],
})
export class FirstModalComponent  implements OnInit {
  @Input() size? = 'md';
  @Input() title? = 'Didacticiel';

  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter()
  

  constructor( private elementRef: ElementRef ) {  }


  close(): void {
    this.elementRef.nativeElement.remove();
    this.closeEvent.emit();
  }

  submit(): void {
    this.elementRef.nativeElement.remove();
    this.submitEvent.emit();
  }

  ngOnInit(): void {
    
  }


  

}
