import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import {RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-front-layoutyout',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,AppComponent,FooterComponent],
  templateUrl: './front-layoutyout.component.html',
  styleUrl: './front-layoutyout.component.scss'
})
export class FrontLayoutyoutComponent {

}
