import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-toggle-item-card',
  templateUrl: './toggle-item-card.component.html',
  styleUrls: ['./toggle-item-card.component.sass'],
  animations: [
    trigger('dropDown', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('500ms ease-in', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
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
