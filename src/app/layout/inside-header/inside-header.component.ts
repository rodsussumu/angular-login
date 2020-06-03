import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inside-header',
  templateUrl: './inside-header.component.html',
  styleUrls: ['./inside-header.component.scss']
})
export class InsideHeaderComponent implements OnInit {

  public routes : any[];
  public loggedUser: any = {}

  constructor(
    private authService : AuthService,
    private router: Router,
  ) {
    this.routes = [
      { label : "Lista de Fotos", link : "/photos" },
      { label : "Pesquisar Fotos", link : "/photos-search" },
      { label : "Tópicos", link : "/topics" },
    ]
  }

  ngOnInit() {
    let userData = this.authService.getLoggedUser()
    console.log(userData)
    this.loggedUser = userData.user
  }

  logout(){
    this.authService.clearStorate()
    this.router.navigate(['/login'])
  }

}
