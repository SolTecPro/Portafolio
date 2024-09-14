import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from "./about-me/about-me.component";
import { ServicesComponent } from "./services/services.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { FormComponent } from "./form/form.component";
import { SkillsComponent } from "./skills/skills.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    AboutMeComponent,
    ServicesComponent,
    NavigationComponent,
    CarouselComponent,
    FormComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'Iván Mtz | Web Developer';
}
