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
  colors: string[] = [];
  title: string = '';

  ngOnInit(): void {
    this.departments = this.personService.getDepartments();

    this.getAverageWellness();
  }

  getAverageWellness() {
    this.valueArray = this.personService
      .getWellnessAverage()
      .map(({ ...e }) => e);

    this.colors = ['#2e8b57'];
    this.title = 'Average Wellness';

    console.log('wellness', this.valueArray);
  }

  getAveragePerformance() {
    this.valueArray = this.personService
      .getPerformanceAverage()
      .map(({ ...e }) => e);
    this.colors = ['#3886a7'];
    this.title = 'Average Performance';
    console.log('performance', this.valueArray);
  }
}
