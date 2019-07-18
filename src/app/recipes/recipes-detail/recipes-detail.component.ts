import { Component, OnInit } from '@angular/core';
import { Ingridents } from '../../shared/ingridents.model';

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

  loadData()
  {
    this.item = this.recipeIngridients.name;
    this.qty = this.recipeIngridients.amount;
  }

}
