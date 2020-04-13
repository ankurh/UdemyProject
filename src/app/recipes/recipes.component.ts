import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from './recipes-list/recipe.model';
import { RecipeService } from './recipeService/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
  
})
export class RecipesComponent implements OnInit {

  constructor(private recipesService:RecipeService) { }
  clickedRec:Recipe;
  ngOnInit() {
    
    this.recipesService.recipeSelectd.
    subscribe(
      (recipe:Recipe) => {
        this.clickedRec =  recipe;
      }
    )
  }
  
   

  /*onRecClick(clickedRecipe)
  {
    this.clickedRec = clickedRecipe;
    
  }*/
}
