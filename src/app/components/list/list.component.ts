import { Component, OnInit } from '@angular/core';
import { PaginatorInterface } from 'src/app/interfaces/paginator.interface';
import { PersonInterface } from 'src/app/interfaces/person.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private personService: PersonService) {}

  listPerson: PersonInterface[] = [];

  paginator: PaginatorInterface = { pageIndex: 0, pageSize: 15, length: 0 };
  ngOnInit(): void {
    this.getPersons();
  }

  getPersons() {
    this.listPerson = this.personService.getPersons(this.paginator);
  }

  next() {
    this.paginator.pageIndex += 1;
    this.getPersons();
  }

  back(){
    this.paginator.pageIndex -= 1;
    this.getPersons();
  }
}
