import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleData } from '../data/sample.data';
import { PaginatorInterface } from '../interfaces/paginator.interface';
import { PersonInterface } from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor() {}

  getPersons(pag: PaginatorInterface): PersonInterface[] {
    const result: PersonInterface[] = SampleData.slice(
     
      pag.pageIndex * pag.pageSize,
       (pag.pageIndex + 1) * pag.pageSize
    );
    console.log('res', result);
    return result;
  }
}
