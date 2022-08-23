import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './Events/create-event.component';
import { EventDetailsComponent } from './Events/event-details/event-details.component';
import { EventRouteActivator } from './Events/event-details/event-route-activator.service';
import { EventsListComponent } from './Events/Event-list.component';
import { EventsListResolver } from './Events/event-list-resolver.service';
const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent , canDeactivate:['canDeactivateCreateEvent']},
  { path: 'events', component: EventsListComponent , resolve: {events:EventsListResolver} }, 
  { path: 'events/:id', component: EventDetailsComponent , canActivate:[EventRouteActivator]},
  { path: '404', component: Error404Component},
   { path: '', redirectTo: '/events', pathMatch: 'full'},
   {
    path: 'user',
    loadChildren: () => import('./user/user.module')
    .then(m => m.UserModule)
   }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }

