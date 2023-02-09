import { Component, OnInit } from '@angular/core';
import { Iingredients } from '@interfaces/iingredients';
import { ShoppingListService } from '@services/shoppingList/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Iingredients[] = [];
  subscriptionStore : Subscription[] = [];
  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscriptionStore.push( this.shoppingListService.updatedIngredients.subscribe((newIngredients: Iingredients[])=> {
      this.ingredients = newIngredients;
    })
    )
  }

  ngOnInit(): void {}
  ngOnDestory(): void {
    this.subscriptionStore.forEach(ele => {
      ele.unsubscribe();
    })
  }
}
