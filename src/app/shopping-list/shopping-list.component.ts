import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shoppingList.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Ingredient[];
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe((ingr: Ingredient[]) => {
      this.ingredients = ingr;
    });
  }

  // onItemAdded(item: Ingredient) {
  //   this.ingredients.push(item);
  // }
}
