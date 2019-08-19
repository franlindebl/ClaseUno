import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public titulo: string = 'Mi primera web con Angular';
  public linksForHeader: object[] = [{
    title: 'Home',
    url: 'http://google.es'
  }, {
    title: 'Nacional',
    url: 'http://periodico.com'
  }, {
    title: 'Deportes',
    url: 'http://marca.com'
  }];

  constructor() {
    this.cambiarValorDeTitulo();
  }

  private cambiarValorDeTitulo() {
    this.titulo = 'Este es el valor nuevo';
  }

  public navigateToLink(elEnlace: any) {
    alert('Tengo que navegar a: ' + elEnlace.url);
    // NAVEGAMOS A LA RUTA
    window.location.href = elEnlace.url;
  }
}
