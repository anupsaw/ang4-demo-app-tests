import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { AksFormConfig } from './aks-forms.config';

@Directive({
  selector: '[aksDynamicControl]'
})
export class AksDynamicFormsDirective implements OnInit {

  @Input() configs: AksFormConfig;

  constructor(private el: ElementRef, private rendere: Renderer2) { }

  ngOnInit() {
    console.log(this.el.nativeElement);
  }

  createControl() {
    this.rendere.createElement('input');
  }
}
