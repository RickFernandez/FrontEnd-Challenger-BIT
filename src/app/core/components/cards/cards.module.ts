import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { PersonalInfoCardComponent } from './personal-info-card/personal-info-card.component';
import { ContactInfoCardComponent } from './contact-info-card/contact-info-card.component';
import { SugestionCardComponent } from './sugestion-card/sugestion-card.component';

@NgModule({
  declarations: [
    ProfileCardComponent,
    PersonalInfoCardComponent,
    ContactInfoCardComponent,
    SugestionCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileCardComponent,
    PersonalInfoCardComponent,
    ContactInfoCardComponent,
    SugestionCardComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CardsModule { }
