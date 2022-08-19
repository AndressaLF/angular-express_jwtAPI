import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientsdata: any;
  loggedin: boolean = localStorage.getItem("jwttoken") ? true : false
  constructor(private service:ClientService) { }

  ngOnInit(): void {
    this.service.getClients().subscribe((response) => {
      console.log(response)
      this.clientsdata = response;
    })
  }

  logout(){
    localStorage.removeItem("jwttoken");
    window.location.href="/login"
  }
}
