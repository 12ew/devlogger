import { Component, OnInit } from "@angular/core";
import { Log } from "../../models/Log";
import { LogService } from "../../services/log.service";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-logs",
  templateUrl: "./logs.component.html",
  styleUrls: ["./logs.component.scss"]
})
export class LogsComponent implements OnInit {
  logs: Log[];
  selectedlog: Log;
  loaded: boolean = false;

  constructor(private logService: LogService) {}

  ngOnInit() {
    this.logService.stateClear.subscribe(clear => {
      if (clear) {
        this.selectedlog = { id: "", text: "", date: "" };
      }
    });

    this.logService.getLogs().subscribe(logs => {
      this.logs = logs;
      this.loaded = true;
    });
  }

  onSelect(log: Log) {
    this.logService.setFormLog(log);
    this.selectedlog = log;
  }

  onDelete(log: Log) {
    if (confirm("Are you sure?")) {
      this.logService.deleteLog(log);
    }
  }
}
