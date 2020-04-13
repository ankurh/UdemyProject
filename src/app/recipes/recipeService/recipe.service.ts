import { EventEmitter, Injectable } from "@angular/core";

import {MyRecipe} from "../../recipes/recipes-list/myRecipe.model";
import { Ingridents } from "../../shared/ingridents.model";
import { ShoppingService } from "../../shopping-list/shoppingService/shopping.service";

@Injectable()
export class RecipeService{

    recipeSelectd = new EventEmitter<MyRecipe>()

   private myrecipes:MyRecipe[] = [
        new MyRecipe("Ice Cream Sandwiches",
                     "HOMEMADE ICE CREAM SANDWICHES",
                     "https://thebakermama.com/wp-content/uploads/2014/05/Homemade-Ice-Cream-Sandwiches-2.jpg",
                     [
                         new Ingridents("Vanilla Icecream",1),
                         new Ingridents("Biscuits",20)
                     ]
                    ),
        new MyRecipe("Gulab Jaamun",
                     "Sweety and Tasty Gulab Jaamun",
                     "https://cdn3.foodviva.com/static-content/food-images/desserts-sweets-recipes/gulab-jamun-recipe/gulab-jamun-recipe.jpg",
                     [
                        new Ingridents("Khoa",200),
                        new Ingridents("Sugar",1)
                     ]
                    )
      
      ]; 

    constructor(private sl:ShoppingService){}
 
    getRecipe(){
        return this.myrecipes;
    }

    addIngridents(ingridents:Ingridents[])
    {
        this.sl.addMultipleIngredients(ingridents)
        
    }
  
}