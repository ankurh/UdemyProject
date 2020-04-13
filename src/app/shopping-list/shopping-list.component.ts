import { Component, OnInit } from '@angular/core';
import {Ingridents} from "../shared/ingridents.model";
import { ShoppingService } from './shoppingService/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingridents[] = [];

constructor(private shoppingService:ShoppingService) {
    this.ingredients = this.shoppingService.getIngredients();
   }

  ngOnInit() {
  }
 
}
