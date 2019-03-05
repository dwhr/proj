import { Component, OnInit } from '@angular/core';
import {CompleteListService} from './complete-list.service';
import { error } from 'util';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-complete-list',
  templateUrl: './complete-list.component.html',
  styleUrls: ['./complete-list.component.css']
})
export class CompleteListComponent implements OnInit {
hold:any;
detail:any;
  constructor(private cs:CompleteListService,private router:Router,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.getcompletelist();
  }
  getcompletelist(){
  this.cs.getcompletelist().subscribe(data=>{
    this.hold=data;
    console.log(this.hold);
    this.detail=this.hold;
    })  }
    onEdit(_id){
     /*  this.cs.editingList(_id).subscribe(data=>{
        this.hold=data;
        console.log(this.hold); */
        this.router.navigate(['edit',_id]);
     /*  }) */
    }

    onDelete(_id){
      this.cs.deleteList(_id).subscribe(data=>{
        this.hold=data;
        console.log(this.hold);
      })
    }
}
