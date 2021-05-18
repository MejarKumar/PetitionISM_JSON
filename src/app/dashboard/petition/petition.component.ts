import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { DashboardService} from '../dashboard.service'
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


PetitionTagedAuthorities= [
  {id:'Academics',value:'Academics'},
  {id:'Library',value:'Library'},
  {id:'Sports',value:'Sports'},
  {id:'Hostel',value:'Hostel'},
  {id:'Mess',value:'Mess'},
  {id:'Cultral',value:'Cultral'}
]
  constructor(private dashboardService:DashboardService) { }
collection:any={};
  ngOnInit(): void {
    this.dashboardService.getList().subscribe(list=>{
      console.log(list);
      this.collection=list
    })
  }

  CreatePetition(){
   console.log(this.addPetition.value)
   this.dashboardService.addPetition(this.addPetition.value).subscribe(result=>{
     console.log(result)

   })
  }
}
