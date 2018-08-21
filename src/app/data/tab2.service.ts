import { Injectable } from '@angular/core';

import { TAB2MOCK_LIST } from './mockData/tab2.mock.data';

@Injectable()
export class Tab2Service {

    constructor() {

    }

    getToggleCardList() {

        const endpoint = TAB2MOCK_LIST;

        return endpoint;
    }
}
