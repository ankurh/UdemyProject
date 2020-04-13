import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Ingridents } from '../../shared/ingridents.model';
import { ShoppingService } from '../shoppingService/shopping.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }
  ingredient: Ingridents;
  addItem(n, q) {
    if (n.trim() == "" || q == "")
      alert("Enter value")
    else
      this.shoppingService.addIngredients(n, q);
  }
}
