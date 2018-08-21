import { Injectable } from '@angular/core';
import { GetCardToggleDataListResponseFields } from "../responseModel/getToggleCardList.response.model";


@Injectable()
export class CardToggleDataListMapper {

    constructor() {

    }

    mapperResponseData( dataToMapper ) {

        let responseArray = [];

        for (let data of dataToMapper) {

            responseArray.push(new GetCardToggleDataListResponseFields(data));
        }

        return responseArray;
    }
}
