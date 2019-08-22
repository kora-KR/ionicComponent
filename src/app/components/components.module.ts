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
    CommonModule
  ],
  declarations: coms,
  exports: coms
})
export class ComponentsModule { }
