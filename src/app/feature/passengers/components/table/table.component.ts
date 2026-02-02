import { Component } from '@angular/core';
import { TITANIC_PASSENGERS } from '../../../../shared/titanic-data';
import { PassengerData } from '../../../../shared/models/titanic-data.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: false,
})
export class TableComponent {
  public readonly dataOfPassengers: PassengerData[] = TITANIC_PASSENGERS
  public currentPage: number = 1;
  public readonly itemsPerPage: number = 15;
  public totalPages: number = Math.ceil(this.dataOfPassengers.length / this.itemsPerPage);

  getPassengersForPage(): PassengerData[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.dataOfPassengers.slice(startIndex, endIndex);
  }

  goToNextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.dataOfPassengers.length) {
      this.currentPage++;
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
