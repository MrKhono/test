import { Component, Input, OnDestroy, OnInit, ViewEncapsulation, ElementRef, TemplateRef } from '@angular/core';
import { DidacticielService } from '../services/didacticiel.service';
import { ModalServiceService } from '../services/modal-service.service';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit{
  @Input() id?: string;
  isOpen = false;

  showModal: string | null = null;

  constructor(private didacticielService: DidacticielService, private modalService: ModalServiceService, private dialog:MatDialog) {
   
  }

  ngOnInit(): void {
    this.showModal = 'modal1';

    this.modalService.openModal$.subscribe(modalName => {
      // Ouvrir la deuxième modale lorsque le service émet un signal
      if (modalName === 'modal1') {
        // Fermer la première modale
        this.showModal = null;

        // Attendre un court instant pour donner l'effet de fermeture
        setTimeout(() => {
          this.showModal = 'modal2';
        }, 500); // Temps en millisecondes
      }
    });
  }

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService
      .open(modalTemplate, { size: 'lg', title: 'Foo' })
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }

  

  


}
