import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { DashboardService} from '../dashboard.service'
import { LoadingBarService } from '@ngx-loading-bar/core';
@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.css']
})
export class PetitionComponent implements OnInit {
addPetition =new FormGroup({
  PetitionTitle:new FormControl(''),
  PetitionTagedAuthority: new FormControl(''),
  PetitionDescription: new FormControl('')
})
TimeSent: Date = new Date()

PetitionTagedAuthorities= [
  {id:'Academics',value:'Academics'},
  {id:'Library',value:'Library'},
  {id:'Sports',value:'Sports'},
  {id:'Hostel',value:'Hostel'},
  {id:'Mess',value:'Mess'},
  {id:'Cultral',value:'Cultral'}
]
  constructor(private dashboardService:DashboardService, private loadingbar:LoadingBarService) { }
collection:any={};
  ngOnInit(): void {
    this.dashboardService.getList().subscribe(list=>{
      console.log(list);
      this.collection =list
this.TimeSent = this.collection
    })
  }

  CreatePetition(){
   console.log(this.addPetition.value)
   this.dashboardService.addPetition(this.addPetition.value).subscribe(result=>{
     console.log(result)
     this.getTimeStamp();
   })
  }

  // method for get time 
getTimeStamp(){
  const now= new Date();
  const date = now.getUTCFullYear()+ '/' + (now.getUTCMonth()+ 1) +'/' + now.getUTCDate();
  const time = now.getHours()+ ':' + now.getMinutes() + ':' + now.getSeconds();
  return (date +'; ' + time);
  }


  startLoading(){
    this.loadingbar.start();
  }
  stopLoading(){
    this.loadingbar.stop();
  }
}
