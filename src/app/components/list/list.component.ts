import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    this.listPerson = this.personService.getPersons();
  }
}
