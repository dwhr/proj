import { Component, OnInit } from '@angular/core';
import {model} from '../reg-model';
import {FormBuilder,FormGroup} from '@angular/forms';
import {RegService} from './reg.service';
import {Router,ActivatedRoute} from '@angular/router';
import {CompleteListComponent} from '../complete-list/complete-list.component';
import {CompleteListService} from '../complete-list/complete-list.service';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
 hold:model;
 regForm: FormGroup;
  constructor(private fb:FormBuilder,private rs:RegService,private activatedroute:ActivatedRoute,
    private cs:CompleteListService) { }
onSubmit()
{
  this.hold=new model();
  this.hold.name=this.regForm.controls.name.value;
  this.hold.phone=this.regForm.controls.phone.value;
  this.hold.email=this.regForm.controls.email.value;
  this.hold.password=this.regForm.controls.password.value;
  this.rs.getregvalue(this.hold).subscribe(data => {this.hold=data});
  console.log(this.hold);

}
  ngOnInit() {
    this.regForm=this.fb.group({
      name:[''],
      phone:[''],
      email:[''],
      password:['']
    })
  }
  opendisp(){
    this.cs.getcompletelist();
    console.log('working');
  }

}
