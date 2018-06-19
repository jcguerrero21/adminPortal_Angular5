import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

//ng2-charts
import { ChartsModule } from "ng2-charts";

//components
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgessComponent } from "./progess/progess.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from "../shared/shared.module";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { ProfileComponent } from "./profile/profile.component";

//Pipes Module
import { PipesModule } from "../pipes/pipes.module";

//temporal
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { GraficoDonaComponent } from "../components/grafico-dona/grafico-dona.component";

//rutas
import { PAGES_ROUTING } from "./pages.routing";
import { CommonModule } from "@angular/common";
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgessComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    ProfileComponent,
    UsuariosComponent,
    ModalUploadComponent,
    HospitalesComponent,
    MedicosComponent,
    MedicoComponent
  ],
  exports: [
    DashboardComponent,
    ProgessComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports: [SharedModule, PAGES_ROUTING, FormsModule, ChartsModule, PipesModule, CommonModule]
})
export class PagesModule {}
