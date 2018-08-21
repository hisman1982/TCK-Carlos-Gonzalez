import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Routes
import { APP_ROUTING } from './app.routes';

// Data
import { Tab1Service } from './data/tab1.service';
import { Tab2Service } from './data/tab2.service';

// Mappers
import { CardDataListMapper } from './core/tab1/mapper/getCardList.mapper'
import { CardToggleDataListMapper } from './core/tab2/mapper/getToggleCardList.mapper'

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { MenuComponent } from './core/menu/menu.component';
import { Tab1Component } from './core/tab1/tab1.component';
import { Tab2Component } from './core/tab2/tab2.component';

// Subcomponents
import { CardComponent } from './shared/card/card.component';
import { ToggleCardComponent } from './shared/toggle-card/toggle-card.component';
import { ToggleItemCardComponent } from './shared/toggle-item-card/toggle-item-card.component';

// Domain
import { Translate } from './app.translate.domain';

// Pipes
// Services
// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';


export function createTranslateLoader(http: HttpClient) {

    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    Tab1Component,
    Tab2Component,
    CardComponent,
    ToggleCardComponent,
    ToggleItemCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    TranslateModule.forRoot({
         loader: {
             provide: TranslateLoader,
             useFactory: (createTranslateLoader),
             deps: [HttpClient]
         }
     }),
     HttpClientModule,
     BrowserAnimationsModule,
     MatButtonModule,
     MatCheckboxModule
  ],
  providers: [
    Translate,
    CardDataListMapper,
    CardToggleDataListMapper,
    Tab1Service,
    Tab2Service
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
