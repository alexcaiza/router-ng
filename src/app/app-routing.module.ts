import { NotesDetailComponent } from './administration/notes/notes-detail.component';
import { AuthGuard } from './authentication/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*** ADMIN COMPONENTS ****/
import { AdminComponent } from './administration/admin/admin.component';
import { NotesComponent } from './administration/notes/notes.component';
import { MessagesComponent } from './administration/messages/messages.component';
import { HomeAdminComponent } from './administration/home/home.component';
/*** END ADMIN COMPONENTS ****/

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'administration',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeAdminComponent,
      },
      {
        path: 'notes',
        component: NotesComponent
      },
      {
        path: 'notes/:id',
        component: NotesDetailComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
