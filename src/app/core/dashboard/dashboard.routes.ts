import { Routes } from '@angular/router';

import { Tab1Component } from "../tab1/tab1.component";
import { Tab2Component } from "../tab2/tab2.component";

export const DASHBOARD_ROUTES: Routes = [

    { path: 'tab1', component: Tab1Component },
    { path: 'tab2', component: Tab2Component },
    { path: '', pathMatch: 'full', redirectTo: 'tab1' },
    { path: '**', redirectTo: 'tab1' }
];
