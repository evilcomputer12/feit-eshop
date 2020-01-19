import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  query = [
    {
      question: 'Цена на производ',
      answer: 'Нашиот модел за цени е транспарентен и фер.'
    },
    {
      question: 'Бесплатна проба',
      answer: 'Нашиот модел за цени е транспарентен и фер.'
    },
    {
      question: 'Зборувајте со вработен',
      answer: 'Нашиот модел за цени е транспарентен и фер.'
    },
    {
      question: 'Прашање до подршка',
      answer: 'Нашиот модел за цени е транспарентен и фер.'
    },
    
  ]
  questions = new BehaviorSubject(this.query);
  constructor() { }

}
