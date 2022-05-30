import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor() { }

  getAll():string[]{
    return[
      '/assets/burger.jpg',
      '/assets/chicken.jpg',
      '/assets/combo.jpg',
      '/assets/healthy food.jpg',
      '/assets/pasta.jpg',
      '/assets/pizza.jpg',
      '/assets/salad.jpg',
      '/assets/sandwich.jpg',
    ]
  }
}
