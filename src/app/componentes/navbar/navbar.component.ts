import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav>
    <a routerLink="/">
        <img src="./assets/Bandera_trans.jpg" alt="Logo de Disidir">
        <span>Disidir</span>
        <em>Academia y Activismos</em>
    </a>
    <button class="btnMenu" ><i class="ai-text-align-justified"></i>></button>
    <ul class="Menu">
        <li class="noVisible close"><i class="ai-x-small"></i></li>
        <li><a routerLink="/nosotres">Nosotres</a></li>
        <li><a routerLink="/docencia">Docencia</a></li>
        <li><a routerLink="/investigacion">Investigación</a></li>
        <li><a routerLink="/extension">Extensión</a></li>
        <li><a routerLink="/entrevistas">Entrevistas</a></li>
        <li><a routerLink="/mapeo-interactivo">Mapeo Interactivo</a></li>
        <li><a href="#contacto">Contacto</a></li>
    </ul>
</nav>`,
})
export class NavbarComponent {

}
