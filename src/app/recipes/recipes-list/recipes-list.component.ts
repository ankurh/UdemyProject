import { Component, OnInit,EventEmitter, Output  } from '@angular/core';
import { MyRecipe } from './myRecipe.model';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  description:string="Test Description";  
  
  @Output() clickedRecipe = new EventEmitter<Recipe>();

  myrecipes:MyRecipe[] = [
    new MyRecipe("Ice Cream Sandwiches",this.description,"https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2019/04/14111847/opener-alt_wide.jpg"),
    new MyRecipe("Samosa",this.description,"https://hebbarskitchen.com/wp-content/uploads/2019/02/samosa-recipe-how-to-make-samosa-aloo-samosa-1-768x1152.jpeg")
  
  ];  
  
  
  constructor() {}
  ngOnInit() {
  }

  showRecipe(recipe)
  {
    this.clickedRecipe.emit(recipe);
  }

}
