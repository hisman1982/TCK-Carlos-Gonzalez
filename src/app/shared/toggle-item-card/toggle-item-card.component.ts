import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-item-card',
  templateUrl: './toggle-item-card.component.html',
  styleUrls: ['./toggle-item-card.component.sass']
})
export class ToggleItemCardComponent implements OnInit {

  @Input() dataToLoad;

  isOpen: boolean = false;
  dataToView: any;

  constructor() {

  }

  ngOnInit() {

    if (this.dataToLoad) {

      this.dataToView = this.dataToLoad;
    }
  }

  showInfoItemCard =() => {

    this.isOpen = !this.isOpen;
  }
}
