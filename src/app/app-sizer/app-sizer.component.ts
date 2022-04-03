import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-sizer',
  templateUrl: './app-sizer.component.html',
  styleUrls: ['./app-sizer.component.css']
})
export class AppSizerComponent implements OnInit {
  @Input() size: number = 0;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  //2 métodos dec=decrease inc=increase, usam resize para mudar o valor da propriedade size
  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }

  resize(delta:number) {
    this.size = Math.min(40, Math.max(8, + this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
