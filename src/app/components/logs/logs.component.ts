import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-logs",
  templateUrl: "./logs.component.html",
  styleUrls: ["./logs.component.scss"]
})
export class LogsComponent implements OnInit {
  logs: {
    id: string;
    text: string;
    date: any;
  }[];

  constructor() {}

  ngOnInit() {
    this.logs = [
      {
        id: "1",
        text: "Generated components",
        date: new Date("12/27/2017 12:54:23")
      },
      {
        id: "2",
        text: "Added login",
        date: new Date("12/27/2017 1:04:38")
      },
      {
        id: "3",
        text: "Added bootstrap",
        date: new Date("12/27/2017 1:34:12")
      }
    ];
  }
}
