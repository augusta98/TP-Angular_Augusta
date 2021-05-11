import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ActivityDetailsComponent } from './home/activity-details/activity-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthentificationService } from './service/authentification/authentification.service';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {
    path: 'Home', component: HomeComponent, canActivate:[AuthGuard]
  },
  {path:'statistics', component:StatisticsComponent, canActivate:[AuthGuard]},
  {path:"", component:LoginComponent  },
  {path: 'activity/:id', component:ActivityDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
