import { EventEmitter, Injectable } from '@angular/core';
import { Iingredients } from '@interfaces/iingredients';
import { Ingredients } from 'app/shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  updatedIngredients = new Subject<Iingredients[]>();

  private ingredients: Iingredients[] = [
    new Ingredients("cinnimon",2),
    new Ingredients("apple", 3),
    new Ingredients("clove", 4)
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addNewIngredient(newIngredient: Iingredients) {
    this.ingredients.push(newIngredient);
    this.updatedIngredients.next(this.ingredients.slice())
  }
  addRecipeIngredientsToShoppingList(recipeIngredients:Iingredients[]){
    this.ingredients.push(...recipeIngredients);
    this.updatedIngredients.next(this.ingredients.slice())
  }
  constructor() { }

}
