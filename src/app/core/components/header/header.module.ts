import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { PeopleFollowedCardComponent } from './people-followed-card/people-followed-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PeopleFollowedCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
