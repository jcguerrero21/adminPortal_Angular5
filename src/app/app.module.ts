import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

//temporal
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Routing
import { APP_ROUTING } from "./app.routing";

//Modulos
import { PagesModule } from "./pages/pages.module";
import { LoginModule } from "./login/login.module";
import { ServiceModule } from "./services/service.module";



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, APP_ROUTING, PagesModule, LoginModule, FormsModule, ServiceModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
