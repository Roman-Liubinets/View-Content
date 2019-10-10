import { Component, OnInit } from "@angular/core";
import { ItemComponent } from "app/item/item.component";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})
export class ChildComponent extends ItemComponent implements OnInit {
  ngOnInit() {
    this.getSomething();
  }
}
