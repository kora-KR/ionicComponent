import { EventEmitter, Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'kora-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})

// 生命周期钩子
export class ShareComponent implements OnInit {

  @Input () parentVal:any;
  @Output() fromChild = new EventEmitter();

  constructor() { }

  // 初始化任务
  ngOnInit() {
    this.fromChild.emit('我是从子组件来的');
  }
}