import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  HostListener,
} from '@angular/core';
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
  @Output() sortingOutput = new EventEmitter<number[]>();

  /**
   * [name,id, department, performance, time, wellness]
   * 1 = normal sorting
   * 0 = no sorting
   * -1 = reverse sorting
   */
  sortingData: number[] = [1, 0, -1, 0, 0, 0];
  listItem: any[] = [
    { name: 'Name', position: 0 },
    { name: 'ID', position: 1 },
    { name: 'Department', position: 2 },
    { name: 'Performance', position: 3 },
    { name: 'Working for', position: 4 },
    { name: 'Wellness', position: 5 },
  ];

  widthScreen: number = 0;

  ngOnInit(): void {
    this.sortEmitter();
    this.widthScreen = window.innerWidth;
  }

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
    this.selectedPersonEmitter();
  }

  pageEmitter() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.newPage.emit(this.paginator);
  }

  selectedPersonEmitter() {
    this.selectedPerson.emit(this.listSelectedPerson);
  }

  sorting(element: number) {
    switch (this.sortingData[element]) {
      case 0:
        this.sortingData[element] = 1;
        break;
      case -1:
        this.sortingData[element] = 0;
        break;

      case 1:
        this.sortingData[element] = -1;
        break;
      default:
        break;
    }

    this.sortEmitter();
  }

  sortEmitter() {
    this.sortingOutput.emit(this.sortingData);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.widthScreen = window.innerWidth;
  }
}
