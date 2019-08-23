import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share/share.component';
import { LoadComponent } from './load/load.component'

const coms:any[] = [
  ShareComponent,
  LoadComponent
]

@NgModule({
  imports: [
    // 基础包(基础管道|指令,如ngIf/ngFor/ngClass等)
    CommonModule
  ],
  declarations: coms,
  exports: coms
})
export class ComponentsModule { }