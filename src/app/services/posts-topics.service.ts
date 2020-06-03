import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostsTopicsService {

  private apiUrl : string = "https://kosmic-forum-api.herokuapp.com"

  constructor(
    private httpClient : HttpClient,
    private authServive : AuthService
  ) { }

  getList() : Promise<any>{

    let userData = this.authServive.getLoggedUser()
    let token = userData.token

    let endpoint = `${this.apiUrl}/topics`
    return this.httpClient.get(endpoint, {
      headers : {
        Authorization : "Bearer " + token
      }
    }).toPromise()
  }

  getById(topicId) : Promise<any>{

    let userData = this.authServive.getLoggedUser()
    let token = userData.token

    let endpoint = `${this.apiUrl}/topics/${topicId}`
    return this.httpClient.get(endpoint, {
      headers : {
        Authorization : "Bearer " + token
      }
    }).toPromise()
  }


}
