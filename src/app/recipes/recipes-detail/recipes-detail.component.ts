import { Component, OnInit, Input } from '@angular/core';
import { Ingridents } from '../../shared/ingridents.model';
import { Recipe } from '../recipes-list/recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  item:string="";
  qty:number=0;
  constructor() { }
  recipeIngridients:Ingridents;
  ngOnInit() {
    
  }
  @Input() recipe:Recipe;
  loadData(test)
  {
    // this.item = this.recipeIngridients.name;
    // this.qty = this.recipeIngridients.amount;
    
  }

  

}
