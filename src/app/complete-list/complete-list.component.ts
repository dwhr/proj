import { Component, OnInit } from '@angular/core';
import {CompleteListService} from './complete-list.service';
import { error } from 'util';
@Component({
  selector: 'app-complete-list',
  templateUrl: './complete-list.component.html',
  styleUrls: ['./complete-list.component.css']
})
export class CompleteListComponent implements OnInit {
hold:any;
detail:any;
  constructor(private cs:CompleteListService) { }

  ngOnInit() {
  }
  getcompletelist(){
  this.cs.getcompletelist().subscribe(data=>{
    this.hold=data;
    console.log(this.hold);
    this.detail=this.hold;
    })  }
    onEdit(name,phone,_id){
      this.cs.editingList(phone).subscribe(data=>{
        this.hold=data;
        console.log(this.hold);
      })
    }

    onDelete(phone,name,_id){
      this.cs.deleteList(phone).subscribe(data=>{
        this.hold=data;
        console.log(this.hold);
      })
    }
}
