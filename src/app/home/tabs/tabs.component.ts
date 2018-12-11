import { Component, OnInit } from '@angular/core';
import * as platform from "tns-core-modules/platform";

@Component({
  selector: 'ns-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  moduleId: module.id,
})
export class TabsComponent implements OnInit {

  public platform = platform;
  public selectedIndex: number;

  constructor() { }

  ngOnInit() {
    if (this.platform.isAndroid) {
      this.selectedIndex = 1;
    } else {
      this.selectedIndex = 3;
    }

  }

}
