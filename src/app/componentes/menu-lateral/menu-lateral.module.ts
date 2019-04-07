import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './menu-lateral.component';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [MenuLateralComponent],
  imports: [
    CommonModule,
    MenuModule,
  ], 
  exports: [MenuLateralComponent]
})
export class MenuLateralModule { }
