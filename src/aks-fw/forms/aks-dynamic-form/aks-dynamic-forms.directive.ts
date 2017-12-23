import { MatInput, MatInputBase, } from '@angular/material';
import { Directive, Input, ElementRef, ViewContainerRef,
   Renderer2, OnInit, ComponentFactoryResolver } from '@angular/core';
import { AksFormConfig } from './aks-forms.interface';

@Directive({
  selector: '[aksDynamicControl]'
})
export class AksDynamicFormsDirective implements OnInit {

  @Input() configs: Array<AksFormConfig>;

  constructor(private el: ElementRef,
    private vRef: ViewContainerRef,
    private cResolver: ComponentFactoryResolver,
    private rendere: Renderer2
  ) { }

  ngOnInit() {
    console.log(this.el.nativeElement);
   // this.createControl();
  }

  createDynamicControl() {

  }

  createControl() {
    const input: ElementRef = this.rendere.createElement('input');
    this.rendere.setProperty(input, 'type', 'text');
    this.rendere.setAttribute(input, 'matInput', '');
    this.rendere.appendChild(this.el.nativeElement, input);
  }
}
