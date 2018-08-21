import { Injectable } from '@angular/core';


@Injectable()
export class GetHotelInfoResponseFields {

    hotelName: string;
    hotelStars: number;

    constructor( formValues?:any ) {

      this.hotelName = formValues.hotelName;
      this.hotelStars = formValues.starRange;
    }
}
