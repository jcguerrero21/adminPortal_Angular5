import { NgModule } from "@angular/core";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgessComponent } from "./progess/progess.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTING } from "./pages.routing";

//rutas

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgessComponent,
    Graficas1Component
  ],
  exports: [
    DashboardComponent,
    ProgessComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports: [SharedModule, PAGES_ROUTING]
})
export class PagesModule {}
