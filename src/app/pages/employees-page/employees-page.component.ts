import { Component, OnInit } from '@angular/core';
import { PaginatorInterface } from 'src/app/interfaces/paginator.interface';
import { PersonInterface } from 'src/app/interfaces/person.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
})
export class EmployeesPageComponent implements OnInit {
  constructor(private personService: PersonService) {}

  listPerson: PersonInterface[] = [];
  listSelectedPerson: number[] = [];

  paginator: PaginatorInterface = { pageIndex: 0, pageSize: 15, length: 0 };

  ngOnInit(): void {
    this.listSelectedPerson = this.personService.selectedIdFav();
    this.getPersons();
  }

  getPersons() {
    this.listPerson = this.personService.getPersons(this.paginator);
    this.listSelectedPerson.forEach((selected) => {
      this.listPerson.forEach((e) => {
        if (e.id == selected) {
          e.fav = true;
          console.log('second', this.listSelectedPerson);
        }
      });
    });
  }

  getPage(page: PaginatorInterface) {
    this.paginator = page;
    this.getPersons();
  }

  getSelected(selected: number[]) {
    this.listSelectedPerson = selected;
  }
}
