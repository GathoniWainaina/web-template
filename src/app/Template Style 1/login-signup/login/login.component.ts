import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../../shared/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private notification: NotificationService) {
  }

  ngOnInit(): void {
  }

}
