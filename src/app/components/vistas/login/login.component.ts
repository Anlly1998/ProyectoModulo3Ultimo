import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users/users.service';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface'

import { Router } from '@angular/router'; // Para redireccionar la pagina cuando el usuario de logue 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor( 
    private usersService:UsersService,
    private router:Router){}

  //Variables para mostar error en login
  errorStatus:boolean = false;
  errorMsj:any = " ";

  
  ngOnInit(): void {
    this.checkLocalStorage();
  }

  //Consultamos si existe el token para que el usuario no se tenga que estar registrando
  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }

  }

  onLogin(form:any){
    this.usersService.LoginByEmail(form).subscribe(data =>{
      let dataResponse:ResponseI = data;
      console.log(dataResponse);
      console.log(data);
      //Si ingresan los datos del login de manera correcta
      if (dataResponse.status == "success"){
        localStorage.setItem("token",dataResponse.authorisation.token);
        this.router.navigate(['dashboard']);
      }
      //Sino ingresan la informacion correcta
      else {
        this.errorStatus = true;
        this.errorMsj = dataResponse.message;
      } 
    })
  }



}
