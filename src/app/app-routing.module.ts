import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailMemberComponent } from './pages/detail-member/detail-member.component';
import { HomeComponent } from './pages/home/home.page';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
},{
  path: 'member-detail',
  component: DetailMemberComponent,
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
