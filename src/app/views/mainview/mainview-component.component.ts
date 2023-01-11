import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tab } from '../../data-menu'

@Component({
  selector: 'app-mainview-component',
  templateUrl: './mainview-component.component.html',
  styleUrls: ['./mainview-component.component.css']
})
export class MainViewComponent implements OnInit {
  tabs: Tab[] | undefined;
  currentTab: string = '';
  sub: Subscription | undefined;

  constructor(private route: ActivatedRoute) { }
  

  ngOnInit(): void {
    this.sub = this.route
    .data
    .subscribe((tabs: any) => { 
      this.tabs = tabs.tabs
    });
  }
}
