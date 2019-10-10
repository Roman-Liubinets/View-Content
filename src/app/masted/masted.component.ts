import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-masted",
  templateUrl: "./masted.component.html",
  styleUrls: ["./masted.component.scss"]
})
export class MastedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  doSomething() {
    console.log("Do Something");
  }
}
