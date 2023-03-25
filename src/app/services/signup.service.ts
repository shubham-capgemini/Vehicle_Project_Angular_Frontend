import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupDTO } from '../model/signup.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  springBootUrl1="http://localhost:8888/signup";

  jsonUrl="http://localhost:5000/signupDTO";


  signup:SignupDTO[];

  constructor(private httpClient:HttpClient) { 
    this.signup=[];
  }

  // get(){
  //   return this.httpClient.get<SignupDTO[]>(`${this.jsonUrl}`);
  // }

  // addUser(signup: SignupDTO) {
  //   return this.httpClient.post<SignupDTO[]>(`${this.jsonUrl}`, { ...signup,id: Math.floor(Math.random())});
  // }

  addUser(signup: any) {
    return this.httpClient.post(`${this.springBootUrl1}`,signup);
  }

  get(){
    return this.httpClient.get<SignupDTO[]>(`http://localhost:8888/getallvehicle`);
  }




}
