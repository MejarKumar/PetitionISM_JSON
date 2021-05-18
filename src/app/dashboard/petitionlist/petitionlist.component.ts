import { Component, OnInit } from '@angular/core';
import { DashboardService} from '../dashboard.service'

@Component({
  selector: 'app-petitionlist',
  templateUrl: './petitionlist.component.html',
  styleUrls: ['./petitionlist.component.css']
})
export class PetitionlistComponent implements OnInit {
  
  constructor(private dashboardService:DashboardService) { }
  collection:any=[];
  ngOnInit(): void {
    this.dashboardService.getList().subscribe((result)=>{
      
      this.collection = result;
      console.log(result)
    })
  }
 
}
