import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit, AfterContentInit {
  @ContentChild("h1") headerElement: ElementRef;

  constructor() {}

  ngOnInit() {}
  ngAfterContentInit() {
    console.log(this.headerElement.nativeElement);
  }
}
