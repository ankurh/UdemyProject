import { Component, OnInit } from '@angular/core';
import {Ingridents} from "../shared/ingridents.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingridents[] = [
  new Ingridents("Potato",10),
  new Ingridents("Tomato",5),
  new Ingridents("Cheese Cubes",4)
];
  constructor() {
console.log(this.ingredients)
   }

  ngOnInit() {
  }
  onAdd(items:Ingridents)
  {
    debugger;
    this.ingredients.push(items)
  }
}
