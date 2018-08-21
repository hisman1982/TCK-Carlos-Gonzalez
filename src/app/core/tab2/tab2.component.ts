import { Component, OnInit } from '@angular/core';

import { Tab2Service } from "../../data/tab2.service";
import { CardToggleDataListMapper } from "./mapper/getToggleCardList.mapper";

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.sass']
})
export class Tab2Component implements OnInit {

  cardDataList: any;

  constructor( private _tab2Service: Tab2Service,
               private _cardToggleDataListMapper: CardToggleDataListMapper ) {

  }

  ngOnInit() {

    window.scrollTo(0, 0);
    this.getCardDataList();
  }

  getCardDataList = () => {

    try {

      this.cardDataList = this._cardToggleDataListMapper.mapperResponseData(this._tab2Service.getToggleCardList());

    } catch(err) {

      this.errorInServiceResponseData(err);
    }
  }

  errorInServiceResponseData = error => {

    let msg = 'Se ha producido un error de servicio';
    console.log('error', msg);
    console.error('error', error);
  }
}
