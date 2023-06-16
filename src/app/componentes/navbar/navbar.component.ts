import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-navbar',
    template: `
  <nav>
    <a routerLink="/">
        <img src="./assets/Bandera_trans.jpg" alt="Logo de Disidir">
        <span>Disidir</span>
        <em>Academia y Activismos</em>
    </a>
    <button class="btnMenu"  (click)="toggleMenu()"><i class="ai-text-align-justified"></i></button>
    <ul class="Menu" *ngIf="isMenuOpen">
        <li class="noVisible close" (click)="closeMenu()"><i class="ai-x-small"></i></li>
        <li><a routerLink="/" (click)="closeMenu()">Inicio</a></li>
        <li><a routerLink="/nosotres" (click)="closeMenu()">Nosotres</a></li>
        <li><a routerLink="/docencia" (click)="closeMenu()">Docencia</a></li>
        <li><a routerLink="/investigacion" (click)="closeMenu()">Investigación</a></li>
        <li><a routerLink="/extension" (click)="closeMenu()">Extensión</a></li>
        <li><a routerLink="/entrevistas" (click)="closeMenu()">Entrevistas</a></li>
        <li><a routerLink="/mapeo-interactivo" (click)="closeMenu()">Mapeo Interactivo</a></li>
        <li><a href="#contacto" (click)="closeMenu()">Contacto</a></li>
    </ul>
</nav>`,
})
export class NavbarComponent {
    isMenuOpen = false;
    isSmallerScreen = false;

    // @HostListener('window:resize', ['$event'])
    // onWindowResize(event: Event) {
    //     this.checkWindowSize();
    // }

    // ngOnInit() {
    //     this.checkWindowSize();
    // }

    // checkWindowSize() {
    //     this.isSmallerScreen = window.innerWidth <= 1150;
    //     this.isMenuOpen = !this.isSmallerScreen;
    // }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu() {
        this.isMenuOpen = false;
    }
}
