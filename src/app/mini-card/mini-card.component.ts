import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent implements OnInit {
  @Input() tituloCard: string | any;
  @Input() numberHomens?: number | any;
  @Input() numberMulheres?: number | any;
  @Input() numberTotalMembros?: number | any;
  @Input() numberTotalIgrejas?: number | any;

  constructor() { }

  ngOnInit(): void {
  }

}
