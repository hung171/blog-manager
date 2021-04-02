import {Component, OnInit,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataAgent} from "../../data.model";
import {ValidationService} from "../../../services/validation.service";

@Component({
  selector: 'app-agent-form',
  templateUrl: './agent-form.component.html',
  styleUrls: ['./agent-form.component.css']
})
export class AgentFormComponent implements OnInit {

  type = [
    'agent',
    'Spy',
    'Monster',
    'Others',
  ];

  role = [
    'Controller',
    'Sentinel',
    'duelist',
    'Initiator',
  ]

  agentFormGroup: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    type: new FormControl(this.type[0], [Validators.required, ValidationService.textValidate]),
    sex: new FormControl('', [Validators.required]),
    role: new FormControl(this.role[0], [Validators.required]),
    age: new FormControl('', [Validators.required, ValidationService.NumberValidate]),
  })


  constructor() {
  }

  ngOnInit(): void {

  }

  get f() { return this.agentFormGroup.controls;}

  setForm(data: DataAgent) {
    this.agentFormGroup.get('id')?.setValue(data.id);
    this.agentFormGroup.get('name')?.setValue(data.name);
    this.agentFormGroup.get('type')?.setValue(data.type);
    this.agentFormGroup.get('sex')?.setValue(data.sex);
    this.agentFormGroup.get('role')?.setValue(data.role);
    this.agentFormGroup.get('age')?.setValue(data.age);
  }

  setFormData(data: DataAgent) {
    this.setForm(data);
  }

  getData() {
    if(this.agentFormGroup.status == 'INVALID'){
      return
    } else {
      return this.agentFormGroup.value;
    }
  }

  getValid():any{
    if(this.agentFormGroup.status == 'INVALID') { return false; }
    else {return true};
  }
}

