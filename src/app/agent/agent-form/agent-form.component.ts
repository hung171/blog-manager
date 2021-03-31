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
  agentFormGroup !: FormGroup;

  constructor(private fakeDataService: _fakeDataService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.agentFormGroup = this.formBuilder.group({
      id: new FormControl(''),
      name: new FormControl( '',[Validators.required, Validators.maxLength(20)]),
      type: new FormControl('',[Validators.required]),
      sex: new FormControl('',[Validators.required]),
      role: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required]),
    })
  }

  setForm(from: FormGroup, data: DataAgent) {
    from.get('name')!.setValue(data.name);
    from.get('type')!.setValue(data.type);
    from.get('sex')!.setValue(data.sex);
    from.get('role')!.setValue(data.role);
    from.get('age')!.setValue(data.age);
  }

  setFormData(data:DataAgent){
    this.setForm(this.agentFormGroup,data);
  }

}

