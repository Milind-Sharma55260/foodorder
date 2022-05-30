import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../services/food/foodservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:string[]=[];

  constructor(private fs:FoodserviceService) { }

  ngOnInit(): void {
this.foods=this.fs.getAll();
  }

}
