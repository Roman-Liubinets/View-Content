import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit,
  ElementRef,
  ContentChildren,
  QueryList
} from "@angular/core";
import { MastedComponent } from "app/masted/masted.component";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit, AfterContentInit {
  // @ContentChild("h1") headerElement: ElementRef;
  // @ContentChild(MastedComponent) mastedElement: MastedComponent;
  @ContentChildren(MastedComponent) mastedElement: QueryList<MastedComponent>;
  constructor() {}

  ngOnInit() {}
  ngAfterContentInit() {
    // console.log(this.headerElement.nativeElement);
    // console.log(this.mastedElement);
    // this.mastedElement.doSomething();
    console.log(this.mastedElement);

    console.log(this.mastedElement.first);
    this.mastedElement.last.doSomething();
    const array = this.mastedElement.toArray();
    console.log("array", array);
  }
}
