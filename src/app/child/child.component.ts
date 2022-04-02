import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

//COMPONENTS COMMUNICATION 
//1.binding
// parent to child: using input decorator

// export class ChildComponent implements OnInit {
//   // @Input() childMessage:any;

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

// child to parent: using output decorator
// export class ChildComponent implements OnInit {
//   @Output() messageEvent = new EventEmitter<string>();

//   constructor() { }

//   ngOnInit(): void {
//   }

//   sendMessage() {
//     this.messageEvent.emit('Hello from child');
//   }

// }

// child to parent: using output decorator
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit('Hello from child');
  }

}