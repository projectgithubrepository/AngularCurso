import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-first',
//   templateUrl: './first.component.html',
//   styleUrls: ['./first.component.css']
// })
// export class FirstComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

// para passar informação de um componente para o outro
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    alert(this.route.snapshot.paramMap.get('id'));
  }

}