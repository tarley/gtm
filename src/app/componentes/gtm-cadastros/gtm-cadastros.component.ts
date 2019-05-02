import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gtm-cadastros',
  templateUrl: './gtm-cadastros.component.html',
  styleUrls: ['./gtm-cadastros.component.scss']
})
export class GtmCadastrosComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

}
