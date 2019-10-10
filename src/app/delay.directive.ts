import {
  Directive,
  TemplateRef,
  ElementRef,
  ViewContainerRef,
  OnInit,
  Input
} from "@angular/core";

@Directive({
  selector: "[delay]"
})
export class DelayDirective implements OnInit {
  @Input("delayTime") time: number;

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<ElementRef>
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template);
    }, this.time * 3000);
  }
}
