import {
  ComponentFactoryResolver,
  Inject,
  Injectable,
  Injector,
  TemplateRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { FirstModalComponent } from '../components/first-modal/first-modal.component';
@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  private modalNotifier?: Subject<string>;
  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  /**
   * La fonction `open` crée et affiche un composant modal avec le contenu et les options spécifiés, et
   * renvoie un observable qui peut être utilisé pour écouter les événements du modal.
   * @param content - Un TemplateRef<any> qui représente le contenu du modal. Il peut être utilisé pour
   * créer une vue intégrée.
   * @param [options] - Objet facultatif pouvant contenir les propriétés suivantes :
   * @returns La méthode renvoie un observable.
   */
  open(content: TemplateRef<any>, options?: { size?: string; title?: string }) {
    const modalComponentFactory = this.resolver.resolveComponentFactory(
      FirstModalComponent
    );
    const contentViewRef = content.createEmbeddedView(null);
    const modalComponent = modalComponentFactory.create(this.injector, [
      contentViewRef.rootNodes,
    ]);

    modalComponent.instance.size = options?.size;
    modalComponent.instance.title = options?.title;
    modalComponent.instance.closeEvent.subscribe(() => this.closeModal());
    modalComponent.instance.submitEvent.subscribe(() => this.submitModal());

    modalComponent.hostView.detectChanges();

    this.document.body.appendChild(modalComponent.location.nativeElement);
    this.modalNotifier = new Subject();
    return this.modalNotifier?.asObservable();
  }

  closeModal() {
    this.modalNotifier?.complete();
  }

  submitModal() {
    this.modalNotifier?.next('confirm');
    this.closeModal();
  }


  private openModalSource = new Subject<string>();
  openModal$ = this.openModalSource.asObservable();

  openModal(modalName: string) {
    this.openModalSource.next(modalName);
  }

  

}
