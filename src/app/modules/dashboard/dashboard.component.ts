import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart: any[] = [];
  cards:  any[]= [];
  pie:  any[]= [];

  constructor( private dashboardServices: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardServices.bigChart();
    this.cards = this.dashboardServices.cards();
    this.pie = this.dashboardServices.pie();

  }

}
