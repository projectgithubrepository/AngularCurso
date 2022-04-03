import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
//COMPONENTS COMMUNICATION 
//1.binding 
// parent to child: using input decorator (nada nesse arquivo)


// child to parent: using output decorator
// export class ParentComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {}

//   receiveMessage(msg:any){
//     alert(msg);
//   }

// }

// child to parent: using viewchild
// export class ParentComponent implements OnInit {
//   @ViewChild(ChildComponent) child:any;
//   constructor() {}

//   ngOnInit(): void {}

//   ngAfterViewInit() {
//     alert(this.child?.message);
//   }

// }

export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

}
