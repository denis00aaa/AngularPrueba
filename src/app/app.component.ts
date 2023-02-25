import { Component, OnInit } from '@angular/core';

interface Imagenes{
  titulo: string;
  subtitulo: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Proyecto prueba';
  public ArregloImagenes: Imagenes[]=[];

  ngOnInit(): void {
    this.ArregloImagenes=[
      {titulo:'Imagen 1', subtitulo:'Subtitulo de Imagen 1'},
      {titulo:'Imagen 2', subtitulo:'Subtitulo de Imagen 2'},
      {titulo:'Imagen 3', subtitulo:'Subtitulo de Imagen 3'},
      {titulo:'Imagen 3', subtitulo:'Subtitulo de Imagen 3'},
    ]
  }
}
