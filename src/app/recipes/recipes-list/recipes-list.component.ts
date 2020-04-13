import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MyRecipe } from './myRecipe.model';
import { Recipe } from './recipe.model';
import { RecipeService } from '../recipeService/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],

})
export class RecipesListComponent implements OnInit {
  myrecipes: MyRecipe[] = [];

  constructor(private recipeService: RecipeService) {
    this.myrecipes = recipeService.getRecipe();
  }
  ngOnInit() {
  }
  
}
