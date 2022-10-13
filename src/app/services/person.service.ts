import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleData } from '../data/sample.data';
import { chartInterface } from '../interfaces/chart.interface';
import { departmentInterface } from '../interfaces/department.interface';
import { PaginatorInterface } from '../interfaces/paginator.interface';
import { PersonInterface } from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  listPerson: PersonInterface[] = SampleData;

  constructor() {}

  selectedPerson: number[] = [];

  getPersons(pag: PaginatorInterface): PersonInterface[] {
    const result: PersonInterface[] = this.listPerson.slice(
      pag.pageIndex * pag.pageSize,
      (pag.pageIndex + 1) * pag.pageSize
    );
    return result.map((e) => {
      e.fav = false;
      return e;
    });
  }

  getPersonFav(pag: PaginatorInterface): PersonInterface[] {
    const result: PersonInterface[] = this.selectedPerson.map((id) => {
      return (
        this.listPerson.find((person) => person.id === id) ||
        ({} as PersonInterface)
      );
    });

    return result.slice(
      pag.pageIndex * pag.pageSize,
      (pag.pageIndex + 1) * pag.pageSize
    );
  }

  selectedIdFav(): number[] {
    return this.selectedPerson;
  }

  getDepartments(): departmentInterface[] {
    const filterDepartaments: departmentInterface[] = this.listPerson
      .filter((v, idx, self) => {
        return (
          idx === self.findIndex((t) => t.department.name === v.department.name)
        );
      })
      .map((e) => e.department);
    return filterDepartaments;
  }

  getWellnessAverage(): chartInterface[] {
    let value: chartInterface[] = [];
    this.getDepartments().forEach((e) => {
      const filter: PersonInterface[] = this.listPerson.filter(
        (v) => v.department.id === e.id
      );
      const valAverage: number =
        filter.reduce((sum, e) => sum + e.wellness, 0) / filter.length;
      value.push({ name: e.name, value: valAverage });
    });

    return value;
  }

  getPerformanceAverage(): chartInterface[] {
    let value: chartInterface[] = [];
    this.getDepartments().forEach((e) => {
      const filter: PersonInterface[] = this.listPerson.filter(
        (v) => v.department.id === e.id
      );
      const valAverage: number =
        filter.reduce((sum, e) => sum + e.performance, 0) / filter.length;
      value.push({ name: e.name, value: valAverage });
    });

    return value;
  }

  sorting(sortingData: number[], pag: PaginatorInterface) {
    const name = (a: PersonInterface, b: PersonInterface) => {
      if (sortingData[0] == 1) {
        return a.name.localeCompare(b.name);
      } else if (sortingData[0] == -1) {
        return b.name.localeCompare(a.name);
      }
      return 0;
    };

    const id = (a: PersonInterface, b: PersonInterface) => {
      if (a.id && b.id) 
        if (sortingData[1] == 1) {
          return b.id - a.id;
        } else if (sortingData[1] == -1) {
          return a.id - b.id;
        }
      
      return;
    };

    const department = (a: PersonInterface, b: PersonInterface) => {
      if (sortingData[2] == 1) {
        return a.department.name.localeCompare(b.department.name);
      } else if (sortingData[2] == -1) {
        return b.department.name.localeCompare(a.department.name);
      }
      return;
    };

    const performance = (a: PersonInterface, b: PersonInterface) => {
      if (sortingData[3] == 1) {
        return b.performance - a.performance;
      } else if (sortingData[3] == -1) {
        return a.performance - b.performance;
      }
      return;
    };

    const time = (a: PersonInterface, b: PersonInterface) => {
      if (sortingData[4] == 1) {
        return b.monthsWorking - a.monthsWorking;
      } else if (sortingData[4] == -1) {
        return a.monthsWorking - b.monthsWorking;
      }
      return;
    };

    const wellness = (a: PersonInterface, b: PersonInterface) => {
      if (sortingData[5] == 1) {
        return b.wellness - a.wellness;
      } else if (sortingData[5] == -1) {
        return a.wellness - b.wellness;
      }
      return;
    };

    let filterDepartaments: PersonInterface[] = [];
    /**
     * Determine the order of the array
     */
    filterDepartaments = this.listPerson.sort((a, b) => {
      return (
        department(a, b) ||
        performance(a, b) ||
        time(a, b) ||
        wellness(a, b) ||
        id(a, b) ||
        name(a, b)
      );
    });

    const result: PersonInterface[] = filterDepartaments.slice(
      pag.pageIndex * pag.pageSize,
      (pag.pageIndex + 1) * pag.pageSize
    );
    return result.map((e) => {
      e.fav = false;
      return e;
    });
  }
}
