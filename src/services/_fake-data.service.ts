import {Injectable, ViewChild} from "@angular/core";
import {Observable, of} from "rxjs";
import {DataAgent} from "../app/data.model";
import {AgentFormComponent} from "../app/agent/agent-form/agent-form.component";

export interface api {
  error?: boolean,
  count?: number,
  result?: any
}

@Injectable({
  providedIn: 'root'
})
export class _fakeDataService {
  data: Array<DataAgent> = [
    {
      id: 1,
      name: "Jett",
      type: 'agent',
      role: 'duelist',
      sex: 'female',
      age: 26,
    },
    {
      id: 2,
      name: "Reyna",
      type: 'agent',
      role: 'duelist',
      sex: 'female',
      age: 28,
    },
    {
      id: 3,
      name: 'Skye',
      type: 'agent',
      role: 'Initiator',
      sex: 'female',
      age: 32,
    },
    {
      id: 4,
      name: "Raze",
      type: 'agent',
      role: 'duelist',
      sex: 'female',
      age: 29,
    },
    {
      id: 5,
      name: "Omen",
      type: 'agent',
      role: 'Controller',
      sex: 'male',
      age: 42,
    },
    {
      id: 6,
      name: "Sage",
      type: 'agent',
      role: 'Sentinel',
      sex: 'female',
      age: 30,
    }

  ];

  public getDataTableFake(model: any): Observable<any> {
    let dataRes: api = {count: 0, error: false};
    dataRes.result = this.data;

    if (model.id !== undefined) {
      dataRes.result = this.data.find(item => item['id'] == model.id);
    }

    if (!dataRes.result) {
      dataRes.count = 0;
    } else {
      dataRes.count = dataRes.result.length !== undefined ? dataRes.result.length : 1;
    }


    return of(dataRes)
  }


  public addData(obj: any) {

    let dataRes: api = {count: 0, error: false};
    dataRes.result = this.data;
    dataRes.count = this.data.length;


    dataRes.result.push(obj);
    return of(dataRes)
  }

  public updateData(index: any, obj: any) {

    let dataRes: api = {count: 0, error: false};
    dataRes.result = this.data;
    dataRes.count = this.data.length;

    dataRes.result[index-1] = obj;

    return of( dataRes)
  }

  public searchData(keyword:any){

    let dataRes: api = {count: 0, error: false};
    dataRes.result = this.data;
    dataRes.count = this.data.length;

    dataRes.result = dataRes.result.filter((res: any ) => { return (res.name.toLocaleLowerCase().match(keyword))})

    return of( dataRes)
  }
}

