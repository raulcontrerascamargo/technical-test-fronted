import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { chartInterface } from 'src/app/interfaces/chart.interface';
import { MatrixService } from 'src/app/services/matrix.service';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss'],
})
export class BarGraphComponent implements OnInit, OnChanges {
  @Input() elements: chartInterface[][] = [];

  list: chartInterface[][] = [];

  descriptions: string[] = [];

  constructor(private MatrixService: MatrixService) {}

  ngOnInit(): void {
    this.descriptions = [];
    this.elements.forEach((arr) => {
      arr.forEach((e) => {
        this.descriptions.push(e.name);
      });
    });

    this.setValues();
  }

  setValues() {
    const backup: chartInterface[][] = this.MatrixService.copy(this.elements);
    this.list = [];

    /* Sort and create a new array */
    const sortArray = () => {
      for (let i = 0; i < backup[0].length; i++) {
        let x: chartInterface[] = [];
        for (let j = 0; j < backup.length; j++) {
          x.push(backup[j][i]);
        }
        this.list.push(x);
      }
    };

    sortArray();

    /* Create a copy of the matrix and then set the value of the bars to  0 */
    const copy: chartInterface[][] = this.MatrixService.copy(this.list);
    this.list.forEach((e) => {
      e.forEach((v) => {
        v.value = 0;
      });
    });

    /* Reload the values of the copy matrix into the original matrix */
    setTimeout(() => {
      this.list.forEach((v, index) => {
        v.forEach((e, p) => {
          for (let i = 0; i < copy[index][p].value; i++) {
            e.value = i;
          }
        });
      });
    }, 250);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setValues();
  }
}
