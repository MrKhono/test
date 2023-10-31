import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstModalComponent } from './first-modal/first-modal.component';
import { SecondModalComponent } from './second-modal/second-modal.component';



@NgModule({
  declarations: [FirstModalComponent, SecondModalComponent],
  imports: [
    CommonModule
  ],
  exports:[FirstModalComponent,SecondModalComponent]
})
export class ComponentsModule { }
