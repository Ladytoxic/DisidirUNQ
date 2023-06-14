import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { FooterComponent } from './componentes/footer/footer.component';

// Paginas
import { InicioComponent } from './paginas/inicio/inicio.component';
import { Pagina404Component } from './paginas/pagina404/pagina404.component';
import { NosotresComponent } from './paginas/nosotres/nosotres.component';
import { DocenciaComponent } from './paginas/docencia/docencia.component';
import { InvestigacionComponent } from './paginas/investigacion/investigacion.component';
import { ExtensionComponent } from './paginas/extension/extension.component';
import { EntrevistasComponent } from './paginas/entrevistas/entrevistas.component';
import { MapeoInteractivoComponent } from './paginas/mapeo-interactivo/mapeo-interactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    Pagina404Component,
    NosotresComponent,
    DocenciaComponent,
    InvestigacionComponent,
    ExtensionComponent,
    EntrevistasComponent,
    MapeoInteractivoComponent,
    PortadaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
