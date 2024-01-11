import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserRes } from '../model/UserRes';
import { HttpClient } from '@angular/common/http';
import { UserReq } from '../model/UserReq';
import { PersonalInfo } from '../model/PersonalInfo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = environment.API_URL;
  followedUsers: UserRes[] = [];
  searchedUsers: UserRes[] = [];
  suggestedUsers: UserRes[] = [];
  user: UserRes = {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Henrique',
      last: 'Fernandez'
    },
    location: {
      street: {
        number: 123,
        name: 'Av. Paulista'
      },
      city: 'São Paulo',
      state: 'SP',
      country: 'Brazil'
    },
    email: 'henrique@email.com',
    dob: {
      date: '2003-08-04',
      age: 20
    },
    phone: '(11) 9 1122-3344',
    cell: '(11) 9 1122-3344',
    picture: {
      large: 'assets/images/personal-pic.jpg',
      medium: 'assets/images/personal-pic.jpg',
      thumbnail: 'assets/images/personal-pic.jpg',
    },
    nat: 'BR',
    following: false,
    id: '1'
  }

  userPersonalInfos: PersonalInfo = {
    gender: 'male',
    state: 'São Paulo',
    dob: {
      date: '2003-08-04',
      age: 20
    },
  };;

  peopleFollowed: BehaviorSubject<UserRes[]> = new BehaviorSubject<UserRes[]>([]);
  peopleSuggestioned: BehaviorSubject<UserRes[]> = new BehaviorSubject<UserRes[]>([]);

  constructor(private http: HttpClient) { }

  getUser(): Observable<UserRes> {
    return this.http.get<UserReq>(this.URL).pipe(
      map((apiRes: any) => {
        let resultsArr = apiRes.results;
        if (resultsArr.length > 0) {
          let result = resultsArr[0];
          this.user.gender = result.gender,
            this.user.name = {
              title: result.name.title,
              first: result.name.first,
              last: result.name.last
            },
            this.user.location = {
              street: {
                number: result.location.street.number,
                name: result.location.street.name
              },
              city: result.location.city,
              state: result.location.state,
              country: result.location.country
            },
            this.user.email = result.email,
            this.user.dob = {
              date: result.dob.date,
              age: result.dob.age
            },
            this.user.phone = result.phone,
            this.user.cell = result.cell,
            this.user.picture = {
              large: result.picture.large,
              medium: result.picture.medium,
              thumbnail: result.picture.thumbnail
            },
            this.user.nat = result.nat,
            this.user.following = false,
            this.user.id = result.login.uuid
            this.getPersonalInfo(this.user.gender, this.user.location.state, this.user.dob.date, this.user.dob.age);
            this.updateSearchedUsers(this.user);        
        }
        return this.user;
      }),
      catchError(e =>
        this.errorHandler(e)
      )
    )
  }

  getPersonalInfo(gender: string, state: string, bithday: string, age: number): PersonalInfo {
    return this.userPersonalInfos = {
      gender: gender,
      state: state,
      dob: {
        date: bithday,
        age: age
      }
    };
  }
  
  followUser(user: UserRes): UserRes[] {
    this.loadFollowedUsers();
    user.following = true;

    this.removeUserFromSuggestion(user);
  
    const existingUserIndex = this.followedUsers.findIndex(u => u.id === user.id);
    if (existingUserIndex === -1) {
      this.followedUsers.push(user);
      this.saveFollowedUsers();
      this.updatePeopleFollowed();
      this.updatePeopleSuggestioned();
    }
    return this.followedUsers;
  }
  
  unfollowUser(user: UserRes): UserRes[] {
    this.loadFollowedUsers();
    if (user.following) {
      const indexToRemove = this.followedUsers.findIndex(u => u.id === user.id);
      if (indexToRemove !== -1) {
        user.following = false;
        this.followedUsers.splice(indexToRemove, 1);
        this.saveFollowedUsers();
        this.updatePeopleFollowed();
        this.updatePeopleSuggestioned();
        this.updateSearchedUsers(user);
      }
    }
    return this.followedUsers;
  }

  updatePeopleFollowed(): void {
    this.peopleFollowed.next(this.followedUsers);
  }
  
  loadFollowedUsers(): Promise<UserRes[]> {
    return new Promise(resolve => {
      const storedUsers = localStorage.getItem('followedUsers');
      this.followedUsers = storedUsers ? JSON.parse(storedUsers) : [];
      this.updatePeopleFollowed();
      this.updatePeopleSuggestioned();
      resolve(this.followedUsers);
    });
  }
  
  saveFollowedUsers(): void {
    localStorage.setItem('followedUsers', JSON.stringify(this.followedUsers));
  }

  updateSearchedUsers(user: UserRes): UserRes[] {
    this.loadSearchedUsers();
    this.searchedUsers.push(new UserRes(user))
    this.saveSearchedUsers();
    return this.searchedUsers;
  }

  loadSearchedUsers(): Promise<UserRes[]> {
    return new Promise(resolve => {
      const storedUsers = localStorage.getItem('searchedUsers');
      this.searchedUsers = storedUsers ? JSON.parse(storedUsers) : [];
      this.updatePeopleSuggestioned();
      resolve(this.searchedUsers);
    });
  }

  saveSearchedUsers(): void {
    localStorage.setItem('searchedUsers', JSON.stringify(this.searchedUsers));
  }

  removeUserFromSuggestion(user: UserRes) {
    if (user.following) {
      this.loadSearchedUsers();
      const indexToRemove = this.searchedUsers.findIndex(u => u.id === user.id);
      if (indexToRemove !== -1) {
        this.searchedUsers.splice(indexToRemove, 1);
        this.saveSearchedUsers();
      }
    }
  }

  updatePeopleSuggestioned(): void {
    this.peopleSuggestioned.next(this.searchedUsers);
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    alert(`
          Oops... An error occurred while trying to find users. Please try again. =(
          If the error persists, try again later.
        `);
    return EMPTY;
  }
}
