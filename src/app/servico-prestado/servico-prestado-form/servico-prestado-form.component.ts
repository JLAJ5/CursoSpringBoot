import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente'
import { from } from 'rxjs';
import { ServicoPrestado } from 'src/app/servico-prestado/servicoPrestado';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: ServicoPrestado;
  success: Boolean = false;
  errors: string[];

  constructor(
    private clienteService: ClientesService,
    private service: ServicoPrestadoService,
    private router: Router
  ) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(response => this.clientes = response);
  }

  onSubmit() {
    this.service.
      salvar(this.servico)
      .subscribe( response => {
        this.success = true;
        this.errors = null;
        this.servico = new ServicoPrestado();
      }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors; 
    });
  }

  voltarParaConsulta(){
    this.router.navigate(['/servico-prestado/listagem'])
  }

}
