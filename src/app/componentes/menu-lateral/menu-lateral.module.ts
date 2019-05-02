import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './menu-lateral.component';
import { MenuModule } from 'primeng/menu';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [MenuLateralComponent],
  imports: [
    CommonModule,
    MenuModule,
    SidebarModule
  ], 
  exports: [MenuLateralComponent]
})
export class MenuLateralModule { }
