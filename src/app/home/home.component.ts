import { Component, Inject, OnInit } from '@angular/core';
import * as platform from "tns-core-modules/platform";

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {

  public platform = platform;

  constructor() { }

  ngOnInit() {
  }

}
