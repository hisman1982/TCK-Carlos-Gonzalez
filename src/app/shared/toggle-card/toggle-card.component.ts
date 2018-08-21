import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-toggle-card',
  templateUrl: './toggle-card.component.html',
  styleUrls: ['./toggle-card.component.sass']
})
export class ToggleCardComponent implements OnInit {

  @Input() dataToLoad;

  dataToView: any;

  constructor() {

  }

  ngOnInit() {

    if (this.dataToLoad) {

      this.dataToView = this.dataToLoad;
    }
  }

  showToggleTab = () => {

    this.dataToView.cardIsOpen = (this.dataToView.cardIsOpen) ? false : true;
  }
}
