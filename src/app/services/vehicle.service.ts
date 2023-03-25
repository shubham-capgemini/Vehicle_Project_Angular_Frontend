import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { vehicleDTO } from '../model/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  //Inject httpCLient in constructor
  constructor(private httpClient:HttpClient) { 

  }

  // Create get method TO get all vehicle all vehicle
getALLVehicle():Observable<vehicleDTO[]>{
  return this.httpClient.get<vehicleDTO[]>('http://localhost:5000/vehicles');
}

deleteVehicle(id: number) {
  return this.httpClient.delete(`http://localhost:5000/vehicles/${id}`);
}

updateVehicle(id:number,vehicle:vehicleDTO):Observable<vehicleDTO>{
  return this.httpClient.put<vehicleDTO>(`http://localhost:5000/vehicles/${id}`,vehicle);
}

getVehiclesById(id: number): Observable<vehicleDTO> {
  return this.httpClient.get<vehicleDTO>(`http://localhost:5000/vehicles/${id}`);
}

addVehicle(vehicle: vehicleDTO) {
  return this.httpClient.post('http://localhost:5000/vehicles', { ...vehicle, id: Math.floor(Math.random())});
}

}
