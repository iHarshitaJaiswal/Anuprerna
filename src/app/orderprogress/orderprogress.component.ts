import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orderprogress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderprogress.component.html',
  styleUrl: './orderprogress.component.css'
})
export class OrderprogressComponent {

  public visibleSections = {
    sourcingS1: false,
    sourcingS2: false,
    sourcingS3: false,
    sourcingS4: false,
    sourcingS5: false,
    sourcingS6: false,
    sourcingS7: false,
    productionS1: false,
    productionS2: false,
    productionS3: false,
    productionS4: false,
    productionS5: false,
    productionS6: false,
  };

  // Method to toggle the visibility of a section
  public  toggleSection(section: 'sourcingS1' | 'sourcingS2'| 'sourcingS3'| 'sourcingS4'| 'sourcingS5'| 'sourcingS6'| 'sourcingS7'| 'productionS1' | 'productionS2' | 'productionS3' | 'productionS4' | 'productionS5' | 'productionS6'): void {
    this.visibleSections[section] = !this.visibleSections[section];
   
  }

}
