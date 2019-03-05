import { Component, OnInit } from '@angular/core';
import {model} from '../reg-model';
import {FormBuilder,FormGroup} from '@angular/forms';
import {EditingService} from './editing.service';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.css']
})
export class EditingComponent implements OnInit {
  hold:model;
  regForm: FormGroup;
  _id:any;
  digital:any;
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private es:EditingService) { }

  ngOnInit() {
 
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
       this._id=params.get('id')
     /*  this.es.editingList(_id) */
    }
    )

    this.getvalue();

    this.regForm=this.fb.group({
      name:[''],
      phone:[''],
      email:[''],
      password:['']
    })

/* this.onSubmit(); */
    
  }
  getvalue(){
    this.es.editingList(this._id).subscribe(data=>{this.hold=data;
    console.log(this.hold);
    this.digital=this.hold;

    });
  }

  onSubmit(){
    this.hold=new model();
  this.hold.name=this.regForm.controls.name.value;
  this.hold.phone=this.regForm.controls.phone.value;
  this.hold.email=this.regForm.controls.email.value;
  this.hold.password=this.regForm.controls.password.value;
  this.es.editedvalue(this.hold,this._id).subscribe(data => {this.hold=data});
  console.log(this.hold);
  }

}
