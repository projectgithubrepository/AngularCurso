import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
//COMPONENTS COMMUNICATION 
//1.binding 
// parent to child: using input decorator

// export class ParentComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {}

//   receiveMessage(msg:any){
//     alert(msg);
//   }

// }

// child to parent: using output decorator
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  receiveMessage(msg:any){
    alert(msg);
  }

}