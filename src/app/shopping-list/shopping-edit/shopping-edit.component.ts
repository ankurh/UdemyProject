import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { Ingridents } from '../../shared/ingridents.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() items=new EventEmitter<Ingridents>();
 ingredient:Ingridents;
    addItem(n,q){
      debugger;
      const ing = new Ingridents(n,q);
    this.items.emit(ing);
   

  }
}
