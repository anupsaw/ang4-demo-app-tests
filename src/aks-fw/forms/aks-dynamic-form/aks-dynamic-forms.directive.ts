import { FormGroup } from '@angular/forms';

import { MatInput, MatInputBase, } from '@angular/material';
import {
  Directive, Input, ElementRef, ViewContainerRef, TemplateRef, ViewChild, ChangeDetectorRef
  , Renderer2, OnInit, ComponentFactoryResolver, AfterViewInit, Injector, EmbeddedViewRef,
  Type, Component
} from '@angular/core';
import { AksFormConfig } from './aks-forms.interface';
import { AksFormsComponentService, AksElementType } from '../componentService/aks-forms-component.service';


@Directive({
  selector: '[aksDynamicControl]',
  providers: [AksFormsComponentService]
})
export class AksDynamicFormsDirective implements OnInit, AfterViewInit {

  @Input() elementConfigs: Array<AksFormConfig>;
  @Input() formGroup: FormGroup;

  @ViewChild('controls', { read: ViewContainerRef }) controls: ViewContainerRef;

  constructor(private el: ElementRef,
    private tpl: TemplateRef<any>,
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private rendere: Renderer2,
    private injector: Injector,
    private cd: ChangeDetectorRef,
    private formsComponentService: AksFormsComponentService
  ) { }

  ngOnInit() {
    console.log(this.elementConfigs);
    console.log(this.formGroup);

  }

  createDynamicControl(element: AksFormConfig, type: Type<any>) {
    //  const factories = Array.from(this.resolver['_factories'].keys());
    //  const factoryClass = <Type<any>>factories.find((x: any) => x.name === type);
    const componentFactory = this.resolver.resolveComponentFactory(type);
    const controlComponent = this.container.createComponent(componentFactory);
    controlComponent.instance.controlConfigs = element;
    controlComponent.instance.controlFormGroup = this.formGroup;
    this.cd.detectChanges();
  }

  ngAfterViewInit() {
    this.elementConfigs.forEach(elConfig => {
      const componentType = this.formsComponentService
        .getComponentType(AksElementType[elConfig.type]);
      this.createDynamicControl(elConfig, componentType);
    });
  }


}
