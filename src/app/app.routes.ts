import { RouterModule, Routes } from '@angular/router';

// Own components
import { DashboardComponent } from "./core/dashboard/dashboard.component";

// Own routes
import { DASHBOARD_ROUTES } from "./core/dashboard/dashboard.routes";


const APP_ROUTES: Routes = [

    { path: 'dashboard', component: DashboardComponent, children: DASHBOARD_ROUTES },
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

/* enableTracing: true <- add in object to debug the router */
