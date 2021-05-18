import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private dashboardService:DashboardService, private router:ActivatedRoute) { }
  collection:any=[];
  searched_id:string|any;
  ngOnInit(): void {
// console.log(this.router.snapshot.params.id)
//  this.dashboardService.getCurrentPetition(this.router.snapshot.params.id).subscribe(result=>{
  
//    this.collection = result;
//    console.log(result)
this.searched_id= this.router.snapshot.params.id;
this.dashboardService.getList().subscribe(result=>{
  this.collection=result;
})
// })
  }

}
