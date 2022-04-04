import { Component, OnInit, OnDestroy } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// binding attribute, class e style

//attribute binding
// colspan é um atributo do table row, enquanto que colSpan é uma propriedade
// @Component({
//   selector: 'app-root',
//   template: `
//     <!-- <p [attr.attribute-you-are-targeting]="expression:any"></p> -->
//     <tr>
//       <td [attr.colspan]="1+1">one-two</td>
//     </tr>
//   `,
//   styleUrls: ['./app.component.css']
// })

//class binding
// @Component({
//   selector: 'app-root',
//   template: `
//     <!-- uma classe -->
//     <div [class.sale]="onSale"></div>  
//     <!-- várias classes em uma string 
//     <div [class]="'classOne classTwo'"></div> -->
//     <!-- várias classes em um objeto 
//     <div [class]="{
//       classOne: true, 
//       classTwo: true 
//     }"></div> -->
//     <!-- várias classes em um array
//     <div [class]="['classOne classTwo']"></div> -->

//   `,
//   styleUrls: ['./app.component.css']
// })


//style binding
// @Component({
//   selector: 'app-root',
//   template: `
//     <!-- uma classe (pode ser tanto dashcase quanto camelcase) -->
//     <div [style.background-color]="expression"></div>
//     <div [style.backgroundColor]="expression"></div> 
//     <!-- várias classes em uma string 
//     <div [style]="'width: 200px; height: 200px; background: red;'"></div> -->
//     <!-- várias classes em um objeto 
//     <div [style]="{
//       width: '200px', 
//       height: '200px',
//       background: 'green',
//     }"></div> -->
//     <!-- array no estilo não é suportado -->
//   `,
//   styleUrls: ['./app.component.css']
// })

//event binding
// @Component({
//   selector: 'app-root',
//   template: `
//     <!-- <button (click)="onSave()">Save</button> -->
//     <app-item-details (deleteRequest)="deleteItem($event)"></app-item-details>
//   `,
//   styleUrls: ['./app.component.css']
// })

//template variables
// @Component({
//   selector: 'app-root',
//   template: `
//     <input #phone placeholder="phone" />
    
//     <button (click)="callPhone(phone.value)">Call</button>
//   `,
//   styleUrls: ['./app.component.css']
// })

//é possível acessar variáveis em templates aninhados?
// um template input consegue acessar variáveis que um template externo define
//no exemplo abaixo mudando o texto no input muda o texto no span, pq o angular de imediato atualiza o estado no template variable ref1
// @Component({
//   selector: 'app-root',
//   template: `
//    <!-- nesse exemplo tem um template implícito em volta do span e a definição da variável é fora do span -->
//     <input #ref1 type="text" [(ngModel)]="firstExample"/>

//     <span *ngIf="true">{{ref1.value}}</span>

//     <!-- é o mesmo que explicitamente fazer o binding como abaixo:
//     Porém acessar o template variable de fora do parent template não funciona  
    
//     <ng-template [ngIf]="true">
//       <span>{{ref1.value}}</span>
//     </ng-template> 
//   -->

//   `,
//   styleUrls: ['./app.component.css']
// })


//Directives
// @Component({
//   selector: 'app-root',
//   template: `
//     <!-- ngClass -->
//     <!-- <div [ngClass]="isSpecial ? 'special' : ''">Example</div> -->

//     <!-- to use ngClass with a method add a method to the component class 
//     no template add ngClass property binding a current class para setar os elementos-->
//     <!-- <div [ngClass]="currentClasses">Example</div> -->

//     <!-- ngStyle 
//     <div [ngStyle]="currentStyle">Example</div> -->

//     <!-- ngModel -->
//     <label for="example">{{name}}</label>
//     <input [(ngModel)]="name" id="example" />

//   `,
//   styleUrls: ['./app.component.css']
// })


//Attribute directives 
// @Component({
//   selector: 'app-root',
//   template: `
//     <!-- estático 
//     <p appHighlight>Test</p> -->
//     <!-- dinâmico -->
//     <p [appHighlight]="'red'">Test</p>
//   `,
//   styleUrls: ['./app.component.css']
// })

//Structural Directives
@Component({
  selector: 'app-root',
  template: `
    <!-- ngIf 
    <div *ngIf="isActive">Active</div>-->

    <!-- ngFor 
    for puro
    <div *ngFor="let item of items">{{item.name}}</div> -->
    <!--  
    for puxando o index 
    <div *ngFor="let item of items; let i = index">{{i}} - {{item.name}}</div> -->

    <!-- ngSwitch (ngSwitch, ngSwitchCase e ngSwitchDefault)-->
    <div [ngSwitch]="item.name">
      <div *ngSwitchCase="'Bob'">Hi dad</div> 
      <div *ngSwitchCase="'Monica'">Hi mom</div>
      <div *ngSwitchDefault>Hi friend</div>
    </div>  
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //first lesson
  // title = 'angular-video-series';
  
  //lifecycle hooks (incluir após appcomponent na linha 8 'implements OnInit, OnDestroy')
  // intervalSub;

  // ngOnInit() {
  //   this.intervalSub = setInterval(() => {
  //     console.log('Hello from ngOnInit');
  //   }, 1000);
  // }

  // ngOnDestroy() {
  //   if(this.intervalSub) {
  //     clearInterval(this.intervalSub);
  //   }
  // }

  //text interpolation
  // title = 'hello world!';
  // getMin(a:any,b:any){
  //   if(a<b){
  //     return a;
  //   }
  //   return b;
  // }

  //template statement
  // showText = false;

  // toggleText(event): void {
  //   this.showText = !this.showText;
  // console.log(event);
  // }

  //Pipes (datepipe, uppercasepipe, currencypipe, percentpipe etc)
  // todaysDate = new Date;

  // Property binding
  //   itemImageUrl = '../assets/phone.jpg';

  //   isUnchanged = true;

  //class binding
  //uma classe
  // onSale = false;

  //event binding
  // onSave(){
  //   console.log('click and save');
  // }

  // deleteItem(item:any){
  //   console.log(item)
  // }

  //two-way binding
  //fontSizepx = 16;

  //template variables
  // callPhone(phone: string) {
  //   console.log(phone);
  // }

  //é possível acessar variáveis em templates aninhados?
  //firstExample= '';

  //Directives
  //ngClass

  // isSpecial = true;
  // ngOnInit() {
  // }

  //to use ngClass with a method add a method to the component class
  // isSpecial = true;
  // currentClasses = {};
  // ngOnInit() {
  //   this.setCurrentClasses();
  // }

  // setCurrentClasses() {
  //   this.currentClasses = {
  //     saveable: true,
  //     modified: false,
  //     special: true
  //   }
  // }

  // //ngStyle
  // isSpecial = true;
  // currentClasses = {};
  // currentStyle = {};

  // ngOnInit() {
  //   this.setCurrentClasses();
  //   this.setCurrentStyle();
  // }

  // setCurrentClasses() {
  //   this.currentClasses = {
  //     saveable: true,
  //     modified: false,
  //     special: true
  //   }
  // }

  // setCurrentStyle() {
  //   this.currentStyle = {
  //     'font-style': 'italic',
  //     'font-weight': 'bold',
  //   }
  // }

   //ngModel
  //  isSpecial = true;
  //  currentClasses = {};
  //  currentStyle = {};
  //  name = 'bob';
 
  //  ngOnInit() {
  //    this.setCurrentClasses();
  //    this.setCurrentStyle();
  //  }
 
  //  setCurrentClasses() {
  //    this.currentClasses = {
  //      saveable: true,
  //      modified: false,
  //      special: true
  //    }
  //  }
 
  //  setCurrentStyle() {
  //    this.currentStyle = {
  //      'font-style': 'italic',
  //      'font-weight': 'bold',
  //    }
  //  }

  //Structural Directives
  //ngIf
  // isActive = true;

  //ngFor
  // items = [
  //   { name: 'Bob'},
  //   { name: 'John'},
  //   { name: 'Monica'}
  // ]

  // ngSwitch (ngSwitch, ngSwitchCase e ngSwitchDefault)
  item = { name: 'Bob'};
}
