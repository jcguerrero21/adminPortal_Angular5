import { RouterModule, Routes } from "@angular/router";

import { Graficas1Component } from "./graficas1/graficas1.component";
import { ProgessComponent } from "./progess/progess.component";
import { PagesComponent } from "./pages.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { LoginGuardGuard } from "../services/guards/login-guard.guard";
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from "./medicos/medico.component";
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AdminGuard } from '../services/guards/admin.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const PAGESROUTING: Routes = [
  {
    path: "",
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
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
        path: "perfil",
        component: ProfileComponent,
        data: { titulo: "Perfil de usuario" }
      },
      {
        path: "busqueda/:termino",
        component: BusquedaComponent,
        data: { titulo: "Buscador" }
      },
      //Mantenimiento
      {
        path: "usuarios",
        component: UsuariosComponent,
        canActivate: [ AdminGuard ],
        data: { titulo: "Mantenimiento de usuarios" }
      },
      {
        path: "hospitales",
        component: HospitalesComponent,
        data: { titulo: "Mantenimiento de hospitales" }
      },
      {
        path: "medicos",
        component: MedicosComponent,
        data: { titulo: "Mantenimiento de Médicos" }
      },
      {
        path: "medico/:id",
        component: MedicoComponent,
        data: { titulo: "Actualizar Médico" }
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
