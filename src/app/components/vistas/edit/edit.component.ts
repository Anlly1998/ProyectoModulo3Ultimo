import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { GuiaI } from '../../models/guia.interface'
import { GuiasService } from '../../../services/guias/guias.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private guiasService:GuiasService
  ){}

  //Form para editar los datos de la guia
  dataGuia:GuiaI[] = [];
  editarForm = new FormGroup({
    id: new FormControl('', Validators.required),
		id_guia: new FormControl('', Validators.required),
		destinatario: new FormControl('',Validators.required),
		users_id: new FormControl(0, Validators.required),
		direccion: new FormControl('',Validators.required),
  });

  ngOnInit(): void {
    let guiaId = this.activatedRoute.snapshot.paramMap.get('idGuia');
    let token = this.getToken();
    this.guiasService.getSingleGuia(guiaId).subscribe((data:any) =>{
      this.dataGuia = data;
      console.log(data);
      this.editarForm.setValue({
        'id': data.id,
        'id_guia': data.id_guia,
        'destinatario': data.destinatario,
        'users_id': data.users_id,
        'direccion': data.direccion,
      });
     console.log(this.editarForm.value);
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

  postForm(form:any){
    this.guiasService.putGuia(form).subscribe(data => {
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Guia actualizada con exito',
        showConfirmButton: true,
      })
    })
    
  }

  //Metodo para salir
  salir(){
    this.router.navigate(['dashboard']);
    
  }
}
