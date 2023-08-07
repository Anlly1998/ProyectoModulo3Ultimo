import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { GuiaI } from '../../models/guia.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { GuiasService } from '../../../services/guias/guias.service'

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit{

  newFormGuia = new FormGroup({
		id_guia: new FormControl(),
		destinatario: new FormControl(''),
		users_id: new FormControl(),
		direccion: new FormControl(''),
  });

  constructor(
    private router:Router,
    private guiasService:GuiasService
  ){

  }


  ngOnInit(): void {
    
  }

  postForm(form:any){
    this.guiasService.postGuia(form).subscribe(data => {
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Guia guarda con exito',
        showConfirmButton: true,
      })
    })
    
  }

    //Metodo para salir
    salir(){
      this.router.navigate(['dashboard']);
    }
}
