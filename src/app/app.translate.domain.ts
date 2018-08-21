import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class Translate {

    trans: TranslateService;

    constructor(translate: TranslateService) {

        this.trans = translate;
    }

    getText(text) {

        let result = '';

        this.trans.get(text).subscribe((res: string) => {

            result = res;
        });

        return result;
    }
}
