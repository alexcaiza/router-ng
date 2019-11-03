import { ApiService } from './services/api.service';
import { AuthGuard } from './authentication/auth.guard';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './administration/admin/admin.component';
import { HomeAdminComponent } from './administration/home/home.component';
import { MessagesComponent } from './administration/messages/messages.component';
import { NotesComponent } from './administration/notes/notes.component';
import { NotesDetailComponent } from './administration/notes/notes-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    HomeAdminComponent,
    MessagesComponent,
    NotesComponent,
    NotesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
