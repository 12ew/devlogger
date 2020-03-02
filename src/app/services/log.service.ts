import { Injectable } from "@angular/core";
import { Log } from "../models/Log";

@Injectable({
  providedIn: "root"
})
export class LogService {
  logs: Log[];

  constructor() {
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

  getLogs() {
    return this.logs;
  }
}
