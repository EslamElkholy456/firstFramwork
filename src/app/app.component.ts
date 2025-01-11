import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HomeComponent from '../components/home/home.component';
import { ContactComponent } from "../components/contact/contact.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
