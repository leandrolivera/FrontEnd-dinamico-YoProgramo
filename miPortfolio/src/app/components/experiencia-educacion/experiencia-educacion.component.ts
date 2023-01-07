import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experiencia-educacion',
  templateUrl: './experiencia-educacion.component.html',
  styleUrls: ['./experiencia-educacion.component.css']
})
export class ExperienciaEducacionComponent implements OnInit{
  educacionList: any;
  constructor(private datosPortfolio:PortfolioService){}

  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      console.log(data.education);
      this.educacionList=data.education;
    });
  }
}
