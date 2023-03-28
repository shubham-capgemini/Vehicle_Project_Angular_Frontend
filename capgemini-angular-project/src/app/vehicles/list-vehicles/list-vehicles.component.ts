import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { vehicleDTO } from '../../model/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';
@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {

  vehicles:vehicleDTO[];

  constructor(private vehicleService:VehicleService,private router:Router){
    this.vehicles=[];
  }

  ngOnInit(): void {
    this.loadVehicle();
  }
  loadVehicle() {
    this.vehicleService.getALLVehicle().subscribe((vehicleList:vehicleDTO[])=>{
      this.vehicles=vehicleList;
    });
  }

  // navigateToHome(){
  //   this.router.navigate(["/"]);
  // }

  navigateToAddVehicle(){
    this.router.navigate(["vehicles/create"]);
  }

  deleteVehicleById(id:number){
    this.vehicleService.deleteVehicle(id).subscribe(()=>{
      this.loadVehicle();
    });
  }

}
