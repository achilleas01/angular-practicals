import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../..//models/models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user$!: Observable<User>;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user$ = this.userService.user$;
  }
}
