import { Component, OnInit } from '@angular/core';
import {faAngleDown, faChartLine, faFile, faReceipt, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dashboardIcon = faChartLine;
  userIcon = faUser;
  reportsIcon = faFile;
  paymentsIcon = faReceipt;
  arrowDownIcon = faAngleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
