import { Component, OnInit } from '@angular/core';
import { chartInterface } from 'src/app/interfaces/chart.interface';
import { departmentInterface } from 'src/app/interfaces/department.interface';
import { MatrixService } from 'src/app/services/matrix.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  elements: string[] = [];

  constructor(
    private personService: PersonService,
    private matrixService: MatrixService
  ) {}

  valueArray: chartInterface[][] = [];
  departments: departmentInterface[] = [];

  graphSelected: string[] = [];

  ngOnInit(): void {
    this.departments = this.personService.getDepartments();

    this.getAverageWellness();
  }

  getAverageWellness() {
    if (!this.graphSelected.includes('wellness')) {
      this.graphSelected.push('wellness');
      this.valueArray.push(
        this.personService.getWellnessAverage().map(({ ...e }) => {
          e.color = '#2e8b57';
          return e;
        })
      );
      const copy: chartInterface[][] = this.matrixService.copy(this.valueArray);

      this.valueArray = copy;
    } else {
      const x: chartInterface[] = this.personService
        .getWellnessAverage()
        .map(({ ...e }) => {
          e.color = '#2e8b57';
          return e;
        });

      this.valueArray.forEach((arr, idx) => {
        if (JSON.stringify(arr) == JSON.stringify(x)) {
          this.valueArray.splice(idx, 1);
          this.graphSelected.splice(this.graphSelected.indexOf('wellness'), 1);
        }
      });

      if (this.valueArray.length > 0) {
        const copy: chartInterface[][] = this.matrixService.copy(
          this.valueArray
        );

        this.valueArray = copy;
      }
    }
  }

  getAveragePerformance() {
    if (!this.graphSelected.includes('performance')) {
      this.graphSelected.push('performance');

      this.valueArray.push(
        this.personService.getPerformanceAverage().map(({ ...e }) => {
          e.color = '#3886a7';
          return e;
        })
      );

      const copy: chartInterface[][] = this.matrixService.copy(this.valueArray);

      this.valueArray = copy;
    } else {
      const x: chartInterface[] = this.personService
        .getPerformanceAverage()
        .map(({ ...e }) => {
          e.color = '#3886a7';
          return e;
        });

      this.valueArray.forEach((arr, idx) => {
        if (JSON.stringify(arr) == JSON.stringify(x)) {
          this.valueArray.splice(idx, 1);
          this.graphSelected.splice(
            this.graphSelected.indexOf('performance'),
            1
          );
        }
      });

      if (this.valueArray.length > 0) {
        const copy: chartInterface[][] = this.matrixService.copy(
          this.valueArray
        );

        this.valueArray = copy;
      }
    }
  }
}
