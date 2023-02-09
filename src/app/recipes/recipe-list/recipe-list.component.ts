import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'app/services/recipeServices/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[];

  constructor(
    private recipeService: RecipeService,
    private router:Router,
    private activeRoute:ActivatedRoute
    ) {}
  recipeSelected (recipeEle: Recipe):void {
    // console.log('----recipeEle----', recipeEle);
    // this.router.navigate(['/recipes',recipeEle.name],{'relativeTo':this.activeRoute});
    this.recipeService.setSelectedRecipe( recipeEle);
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
