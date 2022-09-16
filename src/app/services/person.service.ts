import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleData } from '../data/sample.data';
import { PersonInterface } from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor() {}

  getPersons(): PersonInterface[] {
    return SampleData;
  }
}
