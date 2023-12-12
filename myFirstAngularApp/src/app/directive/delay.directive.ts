import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {

  constructor(
    private vc: ViewContainerRef,
    private tr: TemplateRef<any>
  ) { }

  @Input() set appDelay(time: number | undefined) {
    let delyTimeOut= setTimeout( () => {
      clearTimeout(delyTimeOut);
      this.vc.createEmbeddedView(this.tr);
    }, time );
  }
}
