import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//routingComponents importamos las rutas vistas - login, dashboard, nuevo, edit
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/plantillas/headers/headers.component';
import { FooterComponent } from './components/plantillas/footer/footer.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FooterComponent,
    routingComponents,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
