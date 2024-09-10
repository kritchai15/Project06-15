import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { AppComponent } from '../../app.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
@Component({
  selector: 'app-front-layout',
  standalone: true,
  imports: [NavbarComponent,AppComponent,RouterOutlet,FooterComponent],
  templateUrl: './front-layout.component.html',
  styleUrl: './front-layout.component.scss'
})
export class FrontLayoutComponent {

}
