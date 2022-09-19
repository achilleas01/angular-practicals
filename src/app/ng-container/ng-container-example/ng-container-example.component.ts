import { Component, OnInit } from '@angular/core';
import { Statistics } from '../../constants/constant';
import { Stats } from '../../models/models';

@Component({
  selector: 'app-ng-container-example',
  templateUrl: './ng-container-example.component.html',
  styleUrls: ['./ng-container-example.component.scss'],
})
export class NgContainerExampleComponent implements OnInit {
  constructor() {}
  data: Stats[] = Statistics;
  ngOnInit(): void {}
}
