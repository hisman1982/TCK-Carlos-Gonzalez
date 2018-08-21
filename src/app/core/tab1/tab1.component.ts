import { Component, OnInit } from '@angular/core';

import { Tab1Service } from "../../data/tab1.service";
import { GetHotelInfoResponseFields } from "./responseModel/getHotelInfo.response.model";
import { CardDataListMapper } from "./mapper/getCardList.mapper";


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.sass']
})
export class Tab1Component implements OnInit {

  hotelInfo: any;
  numberStars: number[];
  cardDataList: any;

  constructor( private _tab1Service: Tab1Service,
               private _cardDataListMapper: CardDataListMapper ) {

  }

  ngOnInit() {

    window.scrollTo(0, 0);
    this.getHotelInfo();
    this.getCardDataList();
  }

  getHotelInfo = () => {

    try {

      this.hotelInfo = new GetHotelInfoResponseFields(this._tab1Service.getHotelInfo());
      this.numberStars = Array(this.hotelInfo.hotelStars).fill(this.hotelInfo.hotelStars).map((x,i)=>i);

    } catch(err) {

      this.errorInServiceResponseData(err);
    }
  }

  getCardDataList = () => {

    try {

      this.cardDataList = this._cardDataListMapper.mapperResponseData(this._tab1Service.getHotelInfo().cardsData);

    } catch(err) {

      this.errorInServiceResponseData(err);
    }
  }

  setSelectedCard = $event => {

    for (let data of this.cardDataList) {

      if (data.serviceId !== $event.id && data.selected) {

          data.selected = false;
          break;
      }
    }
  }

  errorInServiceResponseData = error => {

    let msg = 'Se ha producido un error de servicio';
    console.log('error', msg);
    console.error('error', error);
  }
}
