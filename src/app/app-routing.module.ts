import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [

  { path:'recipes', component:RecipesComponent,
    children:[
      { path:':name', component:RecipeDetailComponent, }
    ]
  },
  { path:'shopping-list', component:ShoppingListComponent },
  { path:'',redirectTo:'/recipes',pathMatch:'full' },
  { path:'**',redirectTo:'/recipes' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
