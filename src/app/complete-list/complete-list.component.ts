import { Component, OnInit, ViewChild } from '@angular/core';
import { CompleteListService } from './complete-list.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { model } from '../reg-model';

@Component({
  selector: 'app-complete-list',
  templateUrl: './complete-list.component.html',
  styleUrls: ['./complete-list.component.css']
})
export class CompleteListComponent implements OnInit {
  @ViewChild ( MatPaginator ) paginator : MatPaginator; 
  matdatasource = new MatTableDataSource();
  hold : any;
  detail : any;
  searchAbleList : any;
  list:any;
  public array : any;
  public pageSize = 8;
  public currentPage = 0;
  public totalSize = 0;
  constructor(private cs : CompleteListService,
     private router : Router, private activatedroute : ActivatedRoute) { }

  ngOnInit() {
    this.getcompletelist();
  }
  getcompletelist() {
  this.cs.getcompletelist().subscribe(data => {
    this.hold = data;
    console.log(this.hold);
    this.detail = this.hold;
    
    })
    this.list = new MatTableDataSource < model > (this.detail);
    this.list.paginator = this.paginator;
    this.list = this.detail;
    this.array = this.detail;
    this.totalSize = this.array.length;
    this.iterator();
 
    this.searchAbleList = ['name', 'email', 'phone', 'password'];
  }
   
   public handler(e : any){
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  
    }

  private iterator(){
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.list = part;
  }

    onEdit(_id) {
      this.router.navigate(['edit', _id]);
    }

    onDelete(_id) {
      this.cs.deleteList(_id).subscribe(data => {
        this.hold = data;
        console.log(this.hold);
      })
    }
}
