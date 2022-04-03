import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
}
