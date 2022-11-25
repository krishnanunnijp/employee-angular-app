import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {
  data:any = [
    {
      name: "krishnanunni",
      phone: 8848710090,
      email: "krishnanunnijpjaya@gmail.com",
      designation: "software development trainee",
      salary: 24137125
    },
    {
      name: "sachin",
      phone: 48753849,
      email: "sachin@gmail.com",
      designation: "software development trainee",
      salary: 2537636
    },
    {
      name: "dfgf",
      phone: 345526554,
      email: "thdtyhyt",
      designation: "rthrth",
      salary: 2222222222265
    },
    {
      name: "fgdhdhdhdhdhdhfg",
      phone: 8848710090,
      email: "dhrthdhty",
      designation: "software development trainee",
      salary: 24137125
    },
    {
      name: "fgbhdfbcfg",
      phone: 4625656546,
      email: "sdgfbfgbdfgb",
      designation: "sshstrhtrhrd",
      salary: 5463565
    }

  ]
}
