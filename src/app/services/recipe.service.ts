import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'This is a test Recipe',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Tomato', 2), new Ingredient('Meat', 1)]
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is a test Recipe',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Tomato', 2), new Ingredient('Meat', 1)]
    ),
    new Recipe(
      'A Test Recipe 3',
      'This is a test Recipe',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Tomato', 2), new Ingredient('Meat', 1)]
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
