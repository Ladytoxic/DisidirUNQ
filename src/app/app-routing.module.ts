import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { Pagina404Component } from './paginas/pagina404/pagina404.component';
import { NosotresComponent } from './paginas/nosotres/nosotres.component';
import { DocenciaComponent } from './paginas/docencia/docencia.component';
import { InvestigacionComponent } from './paginas/investigacion/investigacion.component';
import { ExtensionComponent } from './paginas/extension/extension.component';
import { MapeoInteractivoComponent } from './paginas/mapeo-interactivo/mapeo-interactivo.component';
import { EntrevistasComponent } from './paginas/entrevistas/entrevistas.component';

const routes: Routes = [
  { path: '', component: InicioComponent, data: { title: 'Disidir | Inicio' } },
  { path: 'nosotres', component: NosotresComponent, data: { title: 'Disidir | Nosotres' } },
  { path: 'docencia', component: DocenciaComponent, data: { title: 'Disidir | Docencia' } },
  { path: 'investigacion', component: InvestigacionComponent, data: { title: 'Disidir | Investigación' } },
  { path: 'extension', component: ExtensionComponent, data: { title: 'Disidir | Extensión' } },
  { path: 'entrevistas', component: EntrevistasComponent, data: { title: 'Disidir | Entrevistas' } },
  { path: 'mapeo-interactivo', component: MapeoInteractivoComponent, data: { title: 'Disidir | Mapeo Interactivo' } },
  { path: '**', component: Pagina404Component, data: { title: 'Disidir | Pagina no encontrada' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
