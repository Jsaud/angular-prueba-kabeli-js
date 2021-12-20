import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  usersArray: User[] = [
    {
      name: 'Juan Rodriguez',
      email: ' juan@rodriguez.org ',
      password: 'hunter2',
      phone: {
        number: '1234567',
        citycode: '1',
        contrycode: '57',
      },
    },
    {
      name: 'Jinett Saud',
      email: ' jinettsaud@gmail.com ',
      password: 'hunter2',
      phone: {
        number: '64325081',
        citycode: '56',
        contrycode: '9',
      },
    },
  ];

  selectedUser: User = {
    name: '',
    email: '',
    password: '',
    phone: {
      number: '',
      citycode: '',
      contrycode: '',
    },
  };
  addOrEditBtn: boolean = true;
  addOrEditHeader: String = 'Insert a New User';

  edit(user: User) {
    this.selectedUser = user;
    this.addOrEditBtn = false;
    this.addOrEditHeader = 'Update ' + this.selectedUser.name;
  }

  addOrEdit() {
    if (
      this.selectedUser.name !== '' &&
      this.selectedUser.email !== '' &&
      this.selectedUser.password !== '' &&
      this.selectedUser.phone.number !== '' &&
      this.selectedUser.phone.citycode !== '' &&
      this.selectedUser.phone.contrycode !== ''
    ) {
      if (this.addOrEditBtn) {
        this.usersArray.push(this.selectedUser);
      }
      this.selectedUser = {
        name: '',
        email: '',
        password: '',
        phone: {
          number: '',
          citycode: '',
          contrycode: '',
        },
      };
      this.addOrEditBtn = true;
      this.addOrEditHeader = 'Insert a New User';
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'you must fill all fields',
        icon: 'error',
        confirmButtonText: 'Close',
      });
    }
  }

  delete(user: User) {
    this.usersArray = this.usersArray.filter((x) => x != user);
    this.selectedUser = {
      name: '',
      email: '',
      password: '',
      phone: {
        number: '',
        citycode: '',
        contrycode: '',
      },
    };
    Swal.fire('Good job!', 'User deleted!', 'success');
  }
}
