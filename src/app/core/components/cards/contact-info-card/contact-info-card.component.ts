import { Component } from '@angular/core';
import { UserRes } from 'src/app/shared/model/UserRes';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'bit-contact-info-card',
  templateUrl: './contact-info-card.component.html',
  styleUrls: ['./contact-info-card.component.scss']
})
export class ContactInfoCardComponent {
  accordionStatus: boolean = false
  user!: UserRes;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadInitialUser();
  }

  loadInitialUser() {
    this.user = this.userService.user;
  }

  getUser(): void {
    this.userService.getUser().subscribe(
      (responseApi: UserRes) => { 
        this.user = responseApi;
       }
    )
  }

  onAccordion(ev: Event): void {
    const target = ev.target as Element;
    const isButton = target.localName === 'button';
    const isImg = target.localName === 'img';
  
    if (isButton || isImg) {
      const btn = isImg ? target.parentElement : target;
      this.toggleAccordion(btn as Element);
    }
  }
  
  toggleAccordion(button: Element): void {
    if (!button.classList.contains('opened')) {
      button.classList.add('opened');
      this.accordionStatus = true;
    } else {
      button.classList.remove('opened');
      this.accordionStatus = false;
    }
  }
}
