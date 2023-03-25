import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { vehicleDTO } from '../../model/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.css']
})
export class CreateVehiclesComponent implements OnInit {

  constructor(private router:Router,private vehicleService:VehicleService) { }

  ngOnInit(): void {
  }

  saveChanges(newGuestDetails:vehicleDTO){
    this.vehicleService.addVehicle(newGuestDetails).subscribe(()=>{
      this.router.navigate(['/vehicles']);
    });
  }

}
