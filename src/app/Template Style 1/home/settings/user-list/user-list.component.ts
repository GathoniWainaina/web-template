import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userData = [
    {
      userID: 'janeoduong@gmail.com',
      userName: 'Jane Doe',
      role: 'Admin',
      applications: [
        {
          applicationName: 'Application 1'
        },
        {
          applicationName: 'Application 2'
        }
      ]
    },
    {
      userID: 'janeoduong@gmail.com',
      userName: 'Jane Doe',
      role: 'Admin',
      applications: [
        {
          applicationName: 'Application 1'
        },
        {
          applicationName: 'Application 2'
        }
      ]
    },
  ];

  orgApplicationsData = [
    {
      applicationName: 'Application 1'
    },
    {
      applicationName: 'Application 2'
    },
    {
      applicationName: 'Application 3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public getApplicationNames(apps: any): any {
    return apps.map((a: any, _: any) => {
      return a.applicationName;
    }).join(', ');
  }

}
