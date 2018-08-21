import { Injectable } from '@angular/core';

import { TAB1MOCK_LIST } from './mockData/tab1.mock.data';

@Injectable()
export class Tab1Service {

    constructor() {

    }

    getHotelInfo() {

        const endpoint = TAB1MOCK_LIST;

        return endpoint;
    }
}
