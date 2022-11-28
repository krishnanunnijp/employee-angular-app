import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent {
  name=""
  phone=""
  email=""
  designation=""
  salary=""
  readValue = ()=>
  {
    let data :any =     {
      "name": this.name,
      "phone": this.phone,
      "email": this.email,
      "designation": this.designation,
      "salary": this.salary
    }
    console.log(data);
  }
}
