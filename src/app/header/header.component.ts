﻿import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'budget-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit() {
    console.log('Header renderred.');
  }
}
