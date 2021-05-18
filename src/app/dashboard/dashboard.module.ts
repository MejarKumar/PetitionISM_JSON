import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetitionComponent } from './petition/petition.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {DashboardService} from './dashboard.service'
import { AppRoutingModule } from '../app-routing.module';
// module for material
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {matSelectAnimations, MatSelectModule} from '@angular/material/select'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'
import {MatFormFieldModule} from '@angular/material/form-field';
import { PetitionlistComponent } from './petitionlist/petitionlist.component'
import {HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [
    PetitionComponent,
    PetitionlistComponent,
    DetailComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[DashboardService]
})
export class DashboardModule { }
