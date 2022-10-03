import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleData } from '../data/sample.data';
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
}
