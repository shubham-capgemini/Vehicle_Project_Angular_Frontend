import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { vehicleDTO } from '../../model/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-edit-vehicles',
  templateUrl: './edit-vehicles.component.html',
  styleUrls: ['./edit-vehicles.component.css']
})
export class EditVehiclesComponent implements OnInit {

  model!: vehicleDTO;

  constructor(private activatedRoute:ActivatedRoute,
    private router:Router,private vehicleServices:VehicleService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.vehicleServices.getVehiclesById(params['id']).subscribe((vehicle:vehicleDTO)=>{
       this.model=vehicle; 
      })
    });

  }
  saveChanges(vehicleUpdateDetails:vehicleDTO){
    this.vehicleServices.updateVehicle(this.model.id,vehicleUpdateDetails).subscribe(()=>{
      this.router.navigate(['/vehicles']);
    });
  }

}
