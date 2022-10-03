import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PaginatorInterface } from 'src/app/interfaces/paginator.interface';
import { PersonInterface } from 'src/app/interfaces/person.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor() {}

  @Input() list: PersonInterface[] = [];
  @Input() paginator!: PaginatorInterface;
  @Input() listSelectedPerson: number[] = [];
  @Output() newPage = new EventEmitter<PaginatorInterface>();
  @Output() selectedPerson = new EventEmitter<number[]>();
  
  ngOnInit(): void {}

  next() {
    this.paginator.pageIndex += 1;
    this.pageEmitter();
  }

  back() {
    this.paginator.pageIndex -= 1;
    this.pageEmitter();
  }

  selectPerson(id: number) {
    const index = this.list.findIndex((e) => e.id == id);
    if (this.listSelectedPerson.find((e) => e == id)) {
      this.list[index].fav = false;
      const i = this.listSelectedPerson.findIndex((e) => e == id);

      this.listSelectedPerson.splice(i, 1);
    } else {
      this.listSelectedPerson.push(id);

      this.list[index].fav = true;
    }
    this.selectedPersonEmitter()
  }

  pageEmitter() {
    this.newPage.emit(this.paginator);
  }

  selectedPersonEmitter() {
    this.selectedPerson.emit(this.listSelectedPerson);
  }
}
