import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";



const routes: Routes = [
    {
      path: '',
      component: PagesComponent,
      children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'progress', component: ProgressComponent},
        {path: 'grafocas1', component: Graficas1Component},
        //Si no se introduce ninguna ruta, redirecciona a la de dashboard
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      ]
    }
]

export const PAGES_ROUTES = RouterModule.forChild( routes )
  