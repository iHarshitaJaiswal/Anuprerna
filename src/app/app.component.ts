import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderprogressComponent } from './orderprogress/orderprogress.component';
import { OrderoverviewComponent } from "./orderoverview/orderoverview.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrderprogressComponent, OrderoverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnuprernaBpm2';
}
