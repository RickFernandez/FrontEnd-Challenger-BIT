import { UserService } from 'src/app/shared/service/user.service';
import { Component, Input } from '@angular/core';
import { UserRes } from 'src/app/shared/model/UserRes';

@Component({
  selector: 'bit-sugestion-card',
  templateUrl: './sugestion-card.component.html',
  styleUrls: ['./sugestion-card.component.scss']
})
export class SugestionCardComponent {
  @Input() user!: UserRes;

  constructor(private userService: UserService) {}

  onFollow(user: UserRes) {
    this.userService.followUser(user);
  }

  onUnfollow(user: UserRes) {
    this.userService.unfollowUser(user);
  }
}
