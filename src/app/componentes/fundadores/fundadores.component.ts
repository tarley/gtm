import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundadores',
  templateUrl: './fundadores.component.html',
  styleUrls: ['./fundadores.component.scss']
})
export class FundadoresComponent implements OnInit {

  desenvolvedores = [
    {nome: 'Daniel', funcao: 'Fullstack', linkedin: 'LINK', foto: '../../../assets/imagensFundadores/perfilVazio.jpg'},
    {nome: 'Nixon', funcao: 'Fullstack', linkedin: 'LINK', foto: '../../../assets/imagensFundadores/perfilVazio.jpg'},
    {nome: 'Carlos', funcao: 'Fullstack', linkedin: 'LINK'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
