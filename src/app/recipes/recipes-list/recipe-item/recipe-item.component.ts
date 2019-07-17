import { MyRecipe } from '../myRecipe.model';

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  description:string="Test Description";  
  testing:Recipe[] = [];
  myrecipes:MyRecipe[] = [
    new MyRecipe("Ice Cream Sandwiches",this.description,"https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2019/04/14111847/opener-alt_wide.jpg")
  ];  
  
  
  constructor() {
    console.log(new MyRecipe("Ice Cream Sandwiches",this.description,"https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2019/04/14111847/opener-alt_wide.jpg"))
   }

  ngOnInit() {
  }

  setData()
  {


  }

}
