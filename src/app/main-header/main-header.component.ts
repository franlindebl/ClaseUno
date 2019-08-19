import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainHeaderComponent implements OnInit {

  // public links: string[] = ['Home', 'Nacional', 'Deportes', 'Economía'];
  @Input() links: any[] = [];
  @Output() userClickedLink: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public saludarUsuario() {
    alert('Hola usuario!');
  }

  public emitUserClicked(linkClicked: any) {
    console.log('El usuario ha pulsado en: ' + linkClicked.title);
    this.userClickedLink.next(linkClicked);
  }

}
