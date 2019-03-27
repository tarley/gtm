import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSuperiorComponent } from './menu-superior.component';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [MenuSuperiorComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToolbarModule,
    MenubarModule,
    SplitButtonModule,
  ],
  exports: [MenuSuperiorComponent]
})
export class MenuSuperiorModule { }
