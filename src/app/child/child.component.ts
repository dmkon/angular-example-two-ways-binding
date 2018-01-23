import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  count = 0;

  @Output() counterChange: EventEmitter<number>;
  constructor() {
    this.counterChange = new EventEmitter();
  }

  @Input()
  counter() {
    return this.count;
  }

  increment() {
    this.count = this.count + 1;
    this.counterChange.emit(this.count);
  }

  decrement() {
    this.count = this.count - 1;
    this.counterChange.emit(this.count);
  }
}
