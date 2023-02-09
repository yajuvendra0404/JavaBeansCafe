import { Component, Input, OnInit } from '@angular/core';
//@ts-ignore
import { Irecipe } from '@interfaces/irecipe';
import { Recipe } from 'app/recipes/recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input () recipe:Recipe ;
  constructor() {
    this.recipe = {
      name:"",
      description:"",
      imagePath:"",
      ingredients:[]
    }
  }
  showData(){
    console.log("----this.recipe----",this.recipe);
  }

  ngOnInit(): void {
    this.showData();

  }

}
