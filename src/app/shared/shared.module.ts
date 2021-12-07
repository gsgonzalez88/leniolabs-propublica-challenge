import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { SearchComponent } from './components/search/search.component';

import { MembersService } from './services/members.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MembersListComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MembersListComponent,
    SearchComponent
  ],
  providers: [
    MembersService
  ]
})
export class SharedModule { }
