import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  /**
   * Validaciones:
   * password: longitud y coincida con confirmar
   * email: formato email y no vacio
   * nombre y apellido: alfabeticos y no vacios 
   */
  

  form!: FormGroup;
  
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(6)],
      confirmar: ['', Validators.required, Validators.minLength(6)]
    }, {
      validators: () => {
        if(this.form.controls.password.value == this.form.controls.confirmar.value) {
          return null
        } else {
          return {
            confirmPassword:true
          }
        }
      }
    })
  }

  register() {
    if(this.form.valid) {
      console.log('Hacer registro');
    } else {
      console.log('Faltan validaciones');
    }
  }

}