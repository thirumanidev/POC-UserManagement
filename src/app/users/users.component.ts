import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe( resp => {
      this.usersList = resp;
    });
  }

}
