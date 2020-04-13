import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../recipeService/recipe.service';
import { MyRecipe } from '../myRecipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 
 @Input() recipes:MyRecipe;
  
  
 constructor(private recipeService:RecipeService)
 {}
 ngOnInit(){}

 onSelected()
 {
   
   this.recipeService.recipeSelectd.emit(this.recipes);
 }
}
