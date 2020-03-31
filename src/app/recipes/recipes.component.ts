import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from './recipes-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
   clickedRec:Recipe;

  onRecClick(clickedRecipe)
  {
    this.clickedRec = clickedRecipe;
    
  }
}
