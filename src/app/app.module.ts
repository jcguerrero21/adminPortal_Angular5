import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

//Routing
import { APP_ROUTING } from "./app.routing";

//Modulos
import { PagesModule } from "./pages/pages.module";

import { AppComponent } from "./app.component";
import { LoginModule } from "./login/login.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, APP_ROUTING, PagesModule, LoginModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
