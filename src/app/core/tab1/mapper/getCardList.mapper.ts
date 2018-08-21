import { Injectable } from '@angular/core';
import { GetCardDataListResponseFields } from "../responseModel/getCardList.response.model";


@Injectable()
export class CardDataListMapper {

    constructor() {

    }

    mapperResponseData( dataToMapper ) {

        let responseArray = [];

        for (let data of dataToMapper) {

            responseArray.push(new GetCardDataListResponseFields(data));
        }

        return responseArray;
    }
}
