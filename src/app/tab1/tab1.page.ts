import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public parentVal:string= "我是父组件的值";

  constructor() {}

  ngOnInit() {}
  
  receiveVal(e){
    console.log(e);
    // this.parentVal = e
  }
}
