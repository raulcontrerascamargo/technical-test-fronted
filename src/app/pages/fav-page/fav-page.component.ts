import { Component, OnInit } from '@angular/core';
import { PaginatorInterface } from 'src/app/interfaces/paginator.interface';
import { PersonInterface } from 'src/app/interfaces/person.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-fav-page',
  templateUrl: './fav-page.component.html',
  styleUrls: ['./fav-page.component.scss'],
})
export class FavPageComponent implements OnInit {
  constructor(private personService: PersonService) {}

  listPerson: PersonInterface[] = [];
  paginator: PaginatorInterface = { pageIndex: 0, pageSize: 15, length: 0 };
  listSelectedPerson: number[] = [];

  ngOnInit(): void {
    this.listSelectedPerson = this.personService.selectedIdFav();
    this.getPersons();
  }

  getPersons() {
    this.listPerson = this.personService.getPersonFav(this.paginator);
    this.listSelectedPerson.forEach((selected) => {
      this.listPerson.forEach((e) => {
        if (e.id == selected) {
          e.fav = true;
          console.log('third', this.listSelectedPerson);
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
