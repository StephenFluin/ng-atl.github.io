import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { RouterModule } from '@angular/router';
// Import Page Components:
import {
  CodeOfConductComponent,
  DetailsComponent,
  HomeComponent,
  SpeakersComponent,
  SponsorsComponent,
  WorkshopsComponent
} from './pages/pages';
// Import Re-usable Components:
import { PillButtonComponent } from '../components/components';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SpeakerCardComponent } from './speaker-card/speaker-card.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SpeakersService } from './speakers.service';
import { WorkshopsService } from './workshops.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SessionsService } from './sessions.service';
import { SessionsComponent } from './pages/sessions/sessions.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeOfConductComponent,
    DetailsComponent,
    HomeComponent,
    SpeakersComponent,
    SponsorsComponent,
    PillButtonComponent,
    FooterComponent,
    HeaderComponent,
    SpeakerCardComponent,
    BreadcrumbComponent,
    WorkshopsComponent,
    SessionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot()
  ],
  providers: [ SpeakersService, WorkshopsService, SessionsService ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
