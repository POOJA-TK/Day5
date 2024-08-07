import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarouselComponent } from '../../units/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
