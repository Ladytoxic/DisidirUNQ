import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  <app-footer></app-footer>`,
})
export class AppComponent {

  constructor(private titleService: Title, private router: Router) { }
  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const pageTitle = this.getPageTitle(this.router.routerState, this.router.routerState.root).join(' - ');
        this.titleService.setTitle(pageTitle);
      });
  }

  getPageTitle(state: any, parent: any): string[] {
    const data: string[] = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(...this.getPageTitle(state, state.firstChild(parent)));
    }

    return data;
  }
}
