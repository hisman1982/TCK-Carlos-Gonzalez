import { Injectable } from '@angular/core';


interface TCardItem {

    itemName: string;
    itemDesc: string;
    itemInfo: Array<TInfoOption>;
    itemImage: string;
}

interface TInfoOption {

    optionName: string;
}

@Injectable()
export class GetCardToggleDataListResponseFields {

    cardId: number;
    cardName: string;
    cardItem: Array<TCardItem> = [];
    cardIsOpen: boolean;

    constructor( formValues?:any ) {

        this.cardId = formValues.id;
        this.cardName = formValues.name;
        this.cardItem = this.modelItemData(formValues.items);
        this.cardIsOpen = formValues.isOpen;
    }

    modelItemData = itemData => {

        let itemDataArr: Array<TCardItem> = [];

        for (let data of itemData) {

            itemDataArr.push({

                itemName: data.itemName,
                itemDesc: data.description,
                itemInfo: this.modelInfoOption(data.info),
                itemImage: data.image
            });
        }

        return itemDataArr;
    }

    modelInfoOption = infoOption => {

        let infoOptionArr: Array<TInfoOption> = [];

        for (let data of infoOption) {

            infoOptionArr.push({

                optionName: data
            });
        }

        return infoOptionArr;
    }
}
