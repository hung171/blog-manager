import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TopicService {

 topic = {
  error:false,
  count: 100,
  result: [
    {
      id: 1,
      title: 'Valorant Map Guide – Bind',
      content:'Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.'
    },
    {
      id: 2,
      title: 'What are the Valorant maps?',
      content:'Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.'
    },
    {
      id: 3,
      title: 'How does a Valorant match work?',
      content:'Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.'
    },
    {
      id: 4,
      title: 'How do you win a Valorant match?',
      content:'Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.'
    },
    {
      id: 5,
      title: 'Fortifying areas of the map.',
      content:'Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.'
    },
    {
      id: 6,
      title: 'crazy fire',
      content:'Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.'
    }
  ]
 }

 // {id:1}
 public getDataTopic(model: any):Observable<any>{

  return of(this.topic)
 }

}
