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

      const filter: PersonInterface[] = this.listPerson.filter((v) => v.department.id === e.id);
      const valAverage: number = filter.reduce((sum, e) => sum + e.wellness, 0) / filter.length;
      value.push({ name: e.name, value: valAverage});
    });

    console.log("value", value)

    return value;
  }
}
