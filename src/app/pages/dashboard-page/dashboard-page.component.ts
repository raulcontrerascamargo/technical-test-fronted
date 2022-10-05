import { Component, OnInit } from '@angular/core';
import { chartInterface } from 'src/app/interfaces/chart.interface';
import { departmentInterface } from 'src/app/interfaces/department.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  elements: string[] = [];

  constructor(private personService: PersonService) {}

  valueArray: chartInterface[] = [];
  departments: departmentInterface[] = [];

  ngOnInit(): void {
    this.departments = this.personService.getDepartments();

    this.valueArray = this.personService.getWellnessAverage();
 
  }
}
