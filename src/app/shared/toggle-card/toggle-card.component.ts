import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-toggle-card',
  templateUrl: './toggle-card.component.html',
  styleUrls: ['./toggle-card.component.sass'],
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

    this.dataToView.cardIsOpen = !this.dataToView.cardIsOpen;
  }
}
