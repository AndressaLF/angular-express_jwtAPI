import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  })

    
  
  constructor(private service: UsuarioService) { }
  
  ngOnInit(): void {
    
  }

  loginCheck(){
    // console.log(this.form.value)

    this.service.postLogin(this.form.value).subscribe((response:any)=>{
      console.log(response)
      
      if(response.status == false){
        alert(response.message)
        return false

      }
        console.log(response)
        localStorage.setItem('jwttoken', response.token)        
        window.location.href = "/client"
           
    })
  }

  

}

