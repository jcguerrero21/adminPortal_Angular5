import { RouterModule, Routes } from "@angular/router";

import { Graficas1Component } from "./graficas1/graficas1.component";
import { ProgessComponent } from "./progess/progess.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';

const PAGESROUTING: Routes = [
  {
    path: "",
    component: PagesComponent,
    canActivate: [ LoginGuardGuard ],
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: { titulo: "Dashboard" }
      },
      {
        path: "progress",
        component: ProgessComponent,
        data: { titulo: "ProgressBars" }
      },
      {
        path: "graficas1",
        component: Graficas1Component,
        data: { titulo: "Gráficas" }
      },
      {
        path: "promesas",
        component: PromesasComponent,
        data: { titulo: "Promesas" }
      },
      {
        path: "rxjs",
        component: RxjsComponent,
        data: { titulo: "RXJS" }
      },
      {
        path: "account-settings",
        component: AccountSettingsComponent,
        data: { titulo: "Temas" }
      },
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
      }
    ]
  }
];

export const PAGES_ROUTING = RouterModule.forChild(PAGESROUTING);
