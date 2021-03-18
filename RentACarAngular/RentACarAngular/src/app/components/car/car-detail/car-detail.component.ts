import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarService } from 'src/app/services/car.service';
import {Car} from "../../../models/entityModels/car";
import {faLiraSign} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails:Car[];
  //carImages:CarImage[]=[];
  faLira = faLiraSign;

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetail(params["carId"]);
      }
    });
  }

  getCarDetail(carId:number){
    this.carService.getCarDetail(carId).subscribe(response=>{
      //console.log(response);
      this.carDetails = response.data
    })
  }

}