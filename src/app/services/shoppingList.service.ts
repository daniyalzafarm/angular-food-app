import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Banana', 2),
  ];

  addItem(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  getIngredients() {
    return this.ingredients.slice();
  }
}
