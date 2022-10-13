import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeira-pagina',
  templateUrl: './primeira-pagina.component.html',
  styleUrls: ['./primeira-pagina.component.css']
})
export class PrimeiraPaginaComponent implements OnInit {

  constructor(
    private router: Router
  ) 
  { }

  ngOnInit(): void {
  }

  moverSegundaPagina(){
    this.router.navigate(["segunda-pagina"]);
  }

}
