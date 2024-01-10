import { ChangeDetectorRef, Component } from '@angular/core';
import { UserRes } from 'src/app/shared/model/UserRes';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'bit-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  peopleFollowed: UserRes[] = [];
  peopleFollowedCardOpened: boolean = false;

  constructor(private userService: UserService, private cdr: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    await this.userService.loadFollowedUsers();
    this.userService.peopleFollowed.subscribe((followedUsers) => {
      this.peopleFollowed = followedUsers;
      this.cdr.detectChanges();
    });
  }

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
