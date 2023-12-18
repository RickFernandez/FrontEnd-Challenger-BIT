import { Component, Input } from '@angular/core';

@Component({
  selector: 'bit-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() peopleFollowed!: number;
  peopleFollowedCardOpened: boolean = false;

  onPeopleFollowedCard(el: any): void {
    if(!el.target.classList.contains('opened')) {
      el.target.classList.add('opened');
      this.peopleFollowedCardOpened = true;
    }
    else {
      el.target.classList.remove('opened');
      this.peopleFollowedCardOpened = false;
    }
  }
}
