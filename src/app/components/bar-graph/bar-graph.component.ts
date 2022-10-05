import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { chartInterface } from 'src/app/interfaces/chart.interface';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss'],
})
export class BarGraphComponent implements OnInit, OnChanges {
  @Input() elements: chartInterface[] = [];
  @Input() colors: string[] = [];

  list: chartInterface[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log("colors", this.colors)
    this.setValues();
  }

  setValues() {
    const copyArray: chartInterface[] = this.elements.map(({ ...e }) => {
      return e;
    });

    this.list = copyArray.map((e) => {
      e.value = 0.1;
      return e;
    });

    setTimeout(() => {
      this.list.forEach((e, index) => {
        for (let i = 0; i < this.elements[index].value; i++) {
          e.value = i;
        }
      });
    }, 250);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setValues();
  }
}
