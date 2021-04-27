import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appClick]'
})

export class ClickDirective implements OnInit {

  @Input('appClick') myDirective:String = "Hello";

  constructor(private elRef:ElementRef) { }

  ngOnInit() {
    console.log('Aqui detecto evento on click', this.myDirective)
    console.log(this.elRef.nativeElement)
    this.elRef.nativeElement.onClick = (e: any) => {
      console.log('Click en', e)
    }
  }
}