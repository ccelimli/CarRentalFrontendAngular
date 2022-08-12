import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseModel } from 'src/app/models/user/userResponseModel';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  apiUrl = 'https://localhost:7237/api/users/getuserdetails';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UserResponseModel> {
    return this.httpClient.get<UserResponseModel>(this.apiUrl);
  }
}
