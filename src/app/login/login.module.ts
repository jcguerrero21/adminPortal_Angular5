import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register.component";

import { CommonModule } from "@angular/common";
import { APP_ROUTING } from '../app.routing';

declare function init_plugins();

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, CommonModule, APP_ROUTING],
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent, RegisterComponent]
})
export class LoginModule {}
