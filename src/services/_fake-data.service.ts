import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class _fakeDataService {

	data = {
		error: true,
		count: 100,
		result: [
			{ id:1,
				name: "Jett",
        type: 'agent',
        role: 'duelist',
        sex: 'female',
        age:26,
			},
			{ id:2,
				name: "Reyna",
        type: 'agent',
        role: 'duelist',
        sex: 'female',
        age:28,
			},
			{ id:3,
				name: 'Skye',
        type: 'agent',
        role: 'Initiator',
        sex: 'female',
        age:32,
			},
			{ id:4,
				name: "Raze",
        type: 'agent',
        role: 'duelist',
        sex: 'female',
        age:29,
			},
      { id:5,
        name: "Omen",
        type: 'agent',
        role: 'Controller',
        sex: 'male',
        age:42,
      },
      { id:6,
        name:"Sage",
        type: 'agent',
        role: 'Sentinel',
        sex: 'female',
        age:30,

      }

		]
	};

	public getDataTableFake(model: any): Observable<any> {
		return of(this.data)
	}
}
