import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() dataToLoad: object;
  @Output() emitSelected = new EventEmitter<any>();

  dataToView: any;

  constructor() {

  }

  ngOnInit() {

    if (this.dataToLoad) {

      this.dataToView = this.dataToLoad;
    }
  }

  emitSelectCard( value ) {

    this.dataToView.selected = value;
    this.emitSelected.emit({ id: this.dataToView.serviceId, selected: this.dataToView.selected });
  }
}
