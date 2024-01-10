import { Component } from '@angular/core';
import { UserRes } from 'src/app/shared/model/UserRes';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'bit-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  user!: UserRes;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadInitialUser();
    this.updateUserThumbnail();
  }

  onFollow(user: UserRes) {
    this.userService.followUser(user);
  }

  onUnfollow(user: UserRes) {
    this.userService.unfollowUser(user);
  }

  loadInitialUser() {
    this.user = this.userService.user;
  }

  updateUserThumbnail() {
    let thumbnailDiv: HTMLElement = document.getElementById('thumbnail') as HTMLElement;
    if(thumbnailDiv != null) {
      thumbnailDiv.style.backgroundImage = `url(${this.user.picture.large})`;
    }
  }

  searchUser() {
    setTimeout(() => {
      this.getUser();
    }, 500)
  }

  getUser(): void {
    this.userService.getUser().subscribe(
      (responseApi: UserRes) => { 
        this.user = responseApi
        this.updateUserThumbnail();
       }
    )
  }
}
