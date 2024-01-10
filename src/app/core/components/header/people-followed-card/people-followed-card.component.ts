import { ChangeDetectorRef, Component } from '@angular/core';
import { UserRes } from 'src/app/shared/model/UserRes';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'bit-people-followed-card',
  templateUrl: './people-followed-card.component.html',
  styleUrls: ['./people-followed-card.component.scss']
})
export class PeopleFollowedCardComponent {
  peopleFollowed: UserRes[] = [];

  constructor(private userService: UserService, private cdr: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    await this.userService.loadFollowedUsers();
    this.userService.peopleFollowed.subscribe((followedUsers) => {
      this.peopleFollowed = followedUsers;
      this.cdr.detectChanges();
    });
  }

  onUnfollow(user: UserRes) {
    this.userService.unfollowUser(user);
  }
}
