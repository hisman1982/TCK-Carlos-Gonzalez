import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private _translate: TranslateService ) {

        console.log('COMPILE ENVIRONMENT: ' + environment.envName);

        _translate.addLangs(['es', 'en']);
        _translate.setDefaultLang('es');
        _translate.use('es');
    }

    ngOnInit() {

    }
}
