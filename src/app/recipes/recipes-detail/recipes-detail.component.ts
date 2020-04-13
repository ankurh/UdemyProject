import { Component, OnInit, Input } from '@angular/core';
import { Ingridents } from '../../shared/ingridents.model';
import { MyRecipe } from '../recipes-list/myRecipe.model';
import { RecipeService } from '../recipeService/recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  item:string="";
  qty:number=0;
  constructor(private rs:RecipeService) { }
  recipeIngridients:Ingridents;
  ngOnInit() {
    
  }


  @Input() recipe:MyRecipe;
  
  addIngridents()
  {
    this.rs.addIngridents(this.recipe.ingridents)
  }


  

}
