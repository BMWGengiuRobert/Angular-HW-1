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
}
