import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { vehicleDTO } from '../../model/vehicle.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  model!: vehicleDTO;


  @Output()
  vehicleEvent!: EventEmitter<vehicleDTO>;

  form: FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.form=this.formBuilder.group({
      vehicleName:'',
      vehicleCost:'',
    });
    this.vehicleEvent=new EventEmitter<vehicleDTO>();
  }

  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges() { 
    //Triger the Custom Event
    this.vehicleEvent.emit(this.form.value)
  }

}