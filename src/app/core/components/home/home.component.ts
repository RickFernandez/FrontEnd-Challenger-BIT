import { ChangeDetectorRef, Component } from '@angular/core';
import { UserRes } from 'src/app/shared/model/UserRes';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'bit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  suggestedUsers: UserRes[] = [];

  constructor(private userService: UserService, private cdr: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    await this.userService.loadSearchedUsers();
    this.userService.peopleSuggestioned.subscribe((suggestion) => {
      this.suggestedUsers = suggestion;
      this.cdr.detectChanges();
    });
  }
}
