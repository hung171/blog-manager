import {Component, OnInit,} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {_fakeDataService} from "../../../services/_fake-data.service";
import {DataAgent} from "../../data.model";

@Component({
  selector: 'app-agent-form',
  templateUrl: './agent-form.component.html',
  styleUrls: ['./agent-form.component.css']
})
export class AgentFormComponent implements OnInit {
  agentFormGroup: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    type: new FormControl('', [Validators.required]),
    sex: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  })

  constructor(private fakeDataService: _fakeDataService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

  }

  setForm(data: DataAgent) {
    this.agentFormGroup.get(`name`)?.setValue(data.name);
    this.agentFormGroup.get('type')?.setValue(data.type);
    this.agentFormGroup.get('sex')?.setValue(data.sex);
    this.agentFormGroup.get('role')?.setValue(data.role);
    this.agentFormGroup.get('age')?.setValue(data.age);
  }

  setFormData(data: DataAgent) {
    this.setForm(data);
  }

  getData() {
    return this.agentFormGroup.value;
  }

}

