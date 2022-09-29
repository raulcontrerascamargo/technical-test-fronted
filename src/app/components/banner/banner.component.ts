import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor() {}

  waveChar: string[] = ['▂', '▃', '▄', '▅', '▆', '▇', '█', '▓', '▒', '░'];

  listChar: string[] = [];
  phrase: string = 'RELAX';

  ngOnInit(): void {
    this.listChar = this.waveChar
      .concat('#')
      .concat(this.phrase.split(''))
      .concat('#')
      .concat(this.waveChar.reverse());
  }
}
