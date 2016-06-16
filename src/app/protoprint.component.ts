import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';
import { HomeComponent } from './+home/home.component';
import { AdminComponent } from './+admin/admin.component';
import { ClientComponent } from './+client/client.component';

@Component({
  moduleId: module.id,
  selector: 'protoprint-app',
  templateUrl: 'protoprint.component.html',
  styleUrls: ['protoprint.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
  { path: '/', component: HomeComponent },
  { path: '/admin', component: AdminComponent },
  { path: '/client', component: ClientComponent }
])

export class ProtoprintAppComponent {

  constructor(private router: Router) { }

  isActive(route: string) {
    return this.router.urlTree.contains(
      this.router.createUrlTree([route])
    );
  }
}
