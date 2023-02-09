import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iingredients } from '@interfaces/iingredients';
import { RecipeService } from '@services/recipeServices/recipe.service';
import { ShoppingListService } from '@services/shoppingList/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  recipe:Recipe = {
    imagePath:"",
    name:"",
    description:"",
    ingredients:[]
  };

  constructor (
    private activeRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {
  }

  addRecipeIngredientsToShoppingList(ingredients: Iingredients[]) {
    this.shoppingListService.addRecipeIngredientsToShoppingList(ingredients);
  }

  ngOnInit(): void {
    // this.activeRoute.params.subscribe(( data:Params ) => {
    //   if(data['name']) this.recipe = this.recipeService.getRecipes().filter( ele => ele.name === data['name'] )[0];
    // })
    this.recipeService.recipeSelectEvent.subscribe(data => {
      this.recipe = data;
      console.log("recipe Element ---", this.recipe);
    });

  }
}
