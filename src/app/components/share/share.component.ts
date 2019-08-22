import { EventEmitter, Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {

  @Input () parentVal:any;
  @Output() fromChild = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.fromChild.emit('我是从子组件来的');
  }

}
