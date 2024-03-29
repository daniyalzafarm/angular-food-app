import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public image: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    description: string,
    image: string,
    ingr: Ingredient[]
  ) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.ingredients = ingr;
  }
}
