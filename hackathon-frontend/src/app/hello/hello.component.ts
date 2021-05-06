import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {
  @Output()
  nextComponent = new EventEmitter<string>();

  callParent() {
    this.nextComponent.emit('go to next component');
  }

  constructor() {}

  ngOnInit(): void {}
}
