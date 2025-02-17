import { Component, OnInit } from '@angular/core';
import { Food } from '../..//models/models';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.scss'],
})
export class NgContainerComponent implements OnInit {
  foods: Food[] = [
    { value: 'veg', viewValue: 'Veg' },
    { value: 'nonveg', viewValue: 'Non-Veg' },
  ];
  showMore = true;
  food = ['Milk', 'Curd', ''];
  constructor() {}

  ngOnInit(): void {
    // this.selectedCategory = 'mix';
  }
}
