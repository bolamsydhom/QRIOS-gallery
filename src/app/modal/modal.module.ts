import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpComponent } from './pop-up/pop-up.component';



@NgModule({
  imports: [CommonModule],
  declarations: [PopUpComponent],
  exports: [PopUpComponent]
})
export class ModalModule { }
