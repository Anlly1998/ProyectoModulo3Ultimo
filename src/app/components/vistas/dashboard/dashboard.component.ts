import { Component, OnInit } from '@angular/core';
import { GuiasService } from '../../../services/guias/guias.service'
import { ListGuiaI } from '../../models/list.guias'
import { Router } from '@angular/router'
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  guias:ListGuiaI[] = [];

  constructor( 
    private usersService:UsersService,
    private guiasService:GuiasService,
    private router:Router ){}

  ngOnInit(): void {
    this.guiasService.getAllguias().subscribe(data =>{
      this.guias = data;
    })

    let token = localStorage.getItem('token');
  }

  //Metodo para editar guias, enviamos el id de la guia
  editarGuia(idGuia:any){
    this.router.navigate(['edit', idGuia]);
  }

  //Metodo para crear una guia nueva
  newGuia(){
    this.router.navigate(['nuevo']);
  }

}
