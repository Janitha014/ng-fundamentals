import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './Events/create-event.component';
import { EventDetailsComponent } from './Events/event-details/event-details.component';
import { EventRouteActivator } from './Events/event-details/event-route-activator.service';
import { SessionListComponent } from './Events/event-details/session-list.component';
import { EventsListResolver } from './Events/event-list-resolver.service';
import { EventsListComponent } from './Events/Event-list.component';
import { EventThumbnailComponent } from './Events/Event-thumbnail.component';
import { DurationPipe } from './Events/shared/duration.pipe';
import { EventService } from './Events/shared/event.service';
import { NavBarComponent } from './nav/navbar.component';
import { AuthService } from './user/auth.service';
import { ProfileComponent } from './user/profile.component';
import { UserModule } from './user/user.module';
import { userRoutes } from './user/user.route';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    SessionListComponent,
    DurationPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [
    EventService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    
  
    {
        provide: 'canDeactivateCreateEvent',
        useValue: checkDirtyState

    }
  
  ],

  bootstrap: [AppComponent]
})


export class AppModule { }
function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
