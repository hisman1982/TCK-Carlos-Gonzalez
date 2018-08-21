import { Injectable } from '@angular/core';


interface TServiceOptions {

    optionName: string;
}

@Injectable()
export class GetCardDataListResponseFields {

    serviceId: number;
    serviceName: string;
    serviceOptions: Array<TServiceOptions> = [];

    constructor( formValues?:any ) {

      this.serviceId = formValues.id;
      this.serviceName = formValues.name;
      this.serviceOptions = this.modelOptions(formValues.options);
    }

    modelOptions = dataOptions => {

        let projectsData: Array<TServiceOptions> = [];

        for (let data of dataOptions) {

            projectsData.push({

                optionName: data
            });
        }

        return projectsData;
    }
}
