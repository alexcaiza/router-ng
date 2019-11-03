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
import { AdminComponent } from './administracion/admin/admin.component';
import { HomeAdminComponent } from './administracion/home-admin/home-admin.component';
import { MessagesAdminComponent } from './administracion/messages-admin/messages-admin.component';
import { NotesAdminComponent } from './administracion/notes-admin/notes-admin.component';

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
    MessagesAdminComponent,
    NotesAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
