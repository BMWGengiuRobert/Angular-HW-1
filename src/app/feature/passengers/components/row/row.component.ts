import { Component, Input } from '@angular/core';
import { PassengerData } from '../../../../shared/models/titanic-data.model';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrl: './row.component.scss',
  standalone: false,
})
export class RowComponent {
  @Input() public dataOfPassenger!: PassengerData;
}
