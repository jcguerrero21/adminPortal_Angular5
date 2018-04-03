import { RouterModule, Routes } from "@angular/router";

import { Graficas1Component } from "./graficas1/graficas1.component";
import { ProgessComponent } from "./progess/progess.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";

const PAGESROUTING: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "progess",
        component: ProgessComponent
      },
      {
        path: "graficas1",
        component: Graficas1Component
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
