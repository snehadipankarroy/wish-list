import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const wishes = [
      {id: 1, text: 'buy a MacBook'},
      {id: 2, text: 'write a novel'},
      {id: 3, text: 'travel alone'},
      {id: 4, text: 'study journalism'},
      {id: 5, text: 'collect teapots'},
      {id: 6, text: 'meet shah rukh khan'},
      {id: 7, text: 'gift my parents a trip'},
      {id: 8, text: 'shop in New York'},
      {id: 9, text: 'learn a dance form'},
      {id: 10, text: 'take up cooking lessons'}
    ];
    return {wishes};
  }
}
