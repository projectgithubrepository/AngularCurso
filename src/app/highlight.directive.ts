import { Directive, ElementRef, HostListener, Input } from '@angular/core';

//Attribute directives

@Directive({
    selector: '[appHighlight]'
})

//estático
// export class HighlightDirective {
//     @HostListener('mouseenter') onMouseEnter() {
//         this.highlight('yellow');
//     }

//     @HostListener('mouseleave') onMouseLeave() {
//         this.highlight('');
//     }
    
//     constructor(private el: ElementRef) {
//        el.nativeElement.style.backgroundColor = 'yellow'
//     }

//     private highlight(color: string) {
//         this.el.nativeElement.style.backgroundColor = color;
//     }
// }

//dinâmico
export class HighlightDirective {
    @Input() appHighlight = '';
    
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.appHighlight);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }
    
    constructor(private el: ElementRef) {
       el.nativeElement.style.backgroundColor = this.appHighlight;
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}