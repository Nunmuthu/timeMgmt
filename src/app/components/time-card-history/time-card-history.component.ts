import { Component, OnInit } from "@angular/core";
import { INgxMyDpOptions } from "ngx-mydatepicker";

@Component({
  selector: "app-time-card-history",
  templateUrl: "./time-card-history.component.html",
  styleUrls: ["./time-card-history.component.css"]
})
export class TimeCardHistoryComponent implements OnInit {
  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: "dd/mm/yyyy"
  };
  constructor() {}

  ngOnInit(): void {}
}
