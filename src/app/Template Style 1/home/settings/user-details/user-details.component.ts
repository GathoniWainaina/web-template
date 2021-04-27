import { Component, OnInit } from '@angular/core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  arrowLeftIcon = faArrowLeft;


  constructor() { }

  ngOnInit(): void {
  }

}
