import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  cId: string = '';
  user: User | undefined;
  form!: FormGroup;
  
  constructor(private route: ActivatedRoute, private usersService: UsersService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.cId = params['id'];
      this.usersService.get(params['id']).subscribe( resp => {
        this.user = resp;
      });
    });

    this.form = this.formBuilder.group({
      fullName: new FormControl(),
      userName: new FormControl(),
      mobile: new FormControl(),
      address: new FormControl(),
      email: new FormControl(),
      skills: new FormArray([])
    })
    
  }
  addSkill(input: HTMLInputElement) {
    this.skills.push(new FormControl(input.value, Validators.required));
    input.value = '';
  }
  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  get skills() {
    return this.form.get('skills') as FormArray;
  }

  save() {

  }

}
